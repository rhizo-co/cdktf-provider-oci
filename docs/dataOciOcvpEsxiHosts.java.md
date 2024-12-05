# `dataOciOcvpEsxiHosts` Submodule <a name="`dataOciOcvpEsxiHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpEsxiHosts <a name="DataOciOcvpEsxiHosts" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts oci_ocvp_esxi_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHosts;

DataOciOcvpEsxiHosts.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .clusterId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .computeInstanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOcvpEsxiHostsFilter>)
//  .id(java.lang.String)
//  .isBillingDonorsOnly(java.lang.Boolean)
//  .isBillingDonorsOnly(IResolvable)
//  .isSwapBillingOnly(java.lang.Boolean)
//  .isSwapBillingOnly(IResolvable)
//  .sddcId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.computeInstanceId">computeInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isBillingDonorsOnly">isBillingDonorsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isSwapBillingOnly">isSwapBillingOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.sddcId">sddcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}.

---

##### `computeInstanceId`<sup>Optional</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.computeInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBillingDonorsOnly`<sup>Optional</sup> <a name="isBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isBillingDonorsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}.

---

##### `isSwapBillingOnly`<sup>Optional</sup> <a name="isSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isSwapBillingOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}.

---

##### `sddcId`<sup>Optional</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.sddcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId">resetComputeInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly">resetIsBillingDonorsOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly">resetIsSwapBillingOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId">resetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOcvpEsxiHostsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>>

---

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetComputeInstanceId` <a name="resetComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId"></a>

```java
public void resetComputeInstanceId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId"></a>

```java
public void resetId()
```

##### `resetIsBillingDonorsOnly` <a name="resetIsBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly"></a>

```java
public void resetIsBillingDonorsOnly()
```

##### `resetIsSwapBillingOnly` <a name="resetIsSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly"></a>

```java
public void resetIsSwapBillingOnly()
```

##### `resetSddcId` <a name="resetSddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId"></a>

```java
public void resetSddcId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHosts;

DataOciOcvpEsxiHosts.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHosts;

DataOciOcvpEsxiHosts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHosts;

DataOciOcvpEsxiHosts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHosts;

DataOciOcvpEsxiHosts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOcvpEsxiHosts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOcvpEsxiHosts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOcvpEsxiHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpEsxiHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection">esxiHostCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput">computeInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput">isBillingDonorsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput">isSwapBillingOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput">sddcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId">computeInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly">isBillingDonorsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly">isSwapBillingOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId">sddcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `esxiHostCollection`<sup>Required</sup> <a name="esxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection"></a>

```java
public DataOciOcvpEsxiHostsEsxiHostCollectionList getEsxiHostCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter"></a>

```java
public DataOciOcvpEsxiHostsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceIdInput`<sup>Optional</sup> <a name="computeInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput"></a>

```java
public java.lang.String getComputeInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isBillingDonorsOnlyInput`<sup>Optional</sup> <a name="isBillingDonorsOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput"></a>

```java
public java.lang.Object getIsBillingDonorsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSwapBillingOnlyInput`<sup>Optional</sup> <a name="isSwapBillingOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput"></a>

```java
public java.lang.Object getIsSwapBillingOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sddcIdInput`<sup>Optional</sup> <a name="sddcIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput"></a>

```java
public java.lang.String getSddcIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeInstanceId`<sup>Required</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId"></a>

```java
public java.lang.String getComputeInstanceId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isBillingDonorsOnly`<sup>Required</sup> <a name="isBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly"></a>

```java
public java.lang.Object getIsBillingDonorsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSwapBillingOnly`<sup>Required</sup> <a name="isSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly"></a>

```java
public java.lang.Object getIsSwapBillingOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId"></a>

```java
public java.lang.String getSddcId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpEsxiHostsConfig <a name="DataOciOcvpEsxiHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsConfig;

DataOciOcvpEsxiHostsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .clusterId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .computeInstanceId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOcvpEsxiHostsFilter>)
//  .id(java.lang.String)
//  .isBillingDonorsOnly(java.lang.Boolean)
//  .isBillingDonorsOnly(IResolvable)
//  .isSwapBillingOnly(java.lang.Boolean)
//  .isSwapBillingOnly(IResolvable)
//  .sddcId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId">computeInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly">isBillingDonorsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly">isSwapBillingOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId">sddcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}.

---

##### `computeInstanceId`<sup>Optional</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId"></a>

```java
public java.lang.String getComputeInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBillingDonorsOnly`<sup>Optional</sup> <a name="isBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly"></a>

```java
public java.lang.Object getIsBillingDonorsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}.

---

##### `isSwapBillingOnly`<sup>Optional</sup> <a name="isSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly"></a>

```java
public java.lang.Object getIsSwapBillingOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}.

---

##### `sddcId`<sup>Optional</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId"></a>

```java
public java.lang.String getSddcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}.

---

### DataOciOcvpEsxiHostsEsxiHostCollection <a name="DataOciOcvpEsxiHostsEsxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsEsxiHostCollection;

DataOciOcvpEsxiHostsEsxiHostCollection.builder()
    .build();
```


### DataOciOcvpEsxiHostsFilter <a name="DataOciOcvpEsxiHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsFilter;

DataOciOcvpEsxiHostsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpEsxiHostsEsxiHostCollectionList <a name="DataOciOcvpEsxiHostsEsxiHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsEsxiHostCollectionList;

new DataOciOcvpEsxiHostsEsxiHostCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get"></a>

```java
public DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference <a name="DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference;

new DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate">billingContractEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId">billingDonorHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId">computeInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment">currentCommitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku">currentSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId">failedEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate">gracePeriodEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount">hostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress">isBillingContinuationInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress">isBillingSwappingInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment">nextCommitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku">nextSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId">replacementEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId">sddcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId">swapBillingHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId">upgradedReplacementEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingContractEndDate`<sup>Required</sup> <a name="billingContractEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate"></a>

```java
public java.lang.String getBillingContractEndDate();
```

- *Type:* java.lang.String

---

##### `billingDonorHostId`<sup>Required</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId"></a>

```java
public java.lang.String getBillingDonorHostId();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `computeInstanceId`<sup>Required</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId"></a>

```java
public java.lang.String getComputeInstanceId();
```

- *Type:* java.lang.String

---

##### `currentCommitment`<sup>Required</sup> <a name="currentCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment"></a>

```java
public java.lang.String getCurrentCommitment();
```

- *Type:* java.lang.String

---

##### `currentSku`<sup>Required</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku"></a>

```java
public java.lang.String getCurrentSku();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion"></a>

```java
public java.lang.String getEsxiSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `failedEsxiHostId`<sup>Required</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId"></a>

```java
public java.lang.String getFailedEsxiHostId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gracePeriodEndDate`<sup>Required</sup> <a name="gracePeriodEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate"></a>

```java
public java.lang.String getGracePeriodEndDate();
```

- *Type:* java.lang.String

---

##### `hostOcpuCount`<sup>Required</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount"></a>

```java
public java.lang.Number getHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `hostShapeName`<sup>Required</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName"></a>

```java
public java.lang.String getHostShapeName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isBillingContinuationInProgress`<sup>Required</sup> <a name="isBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress"></a>

```java
public IResolvable getIsBillingContinuationInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isBillingSwappingInProgress`<sup>Required</sup> <a name="isBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress"></a>

```java
public IResolvable getIsBillingSwappingInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nextCommitment`<sup>Required</sup> <a name="nextCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment"></a>

```java
public java.lang.String getNextCommitment();
```

- *Type:* java.lang.String

---

##### `nextSku`<sup>Required</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku"></a>

```java
public java.lang.String getNextSku();
```

- *Type:* java.lang.String

---

##### `nonUpgradedEsxiHostId`<sup>Required</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId"></a>

```java
public java.lang.String getNonUpgradedEsxiHostId();
```

- *Type:* java.lang.String

---

##### `replacementEsxiHostId`<sup>Required</sup> <a name="replacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId"></a>

```java
public java.lang.String getReplacementEsxiHostId();
```

- *Type:* java.lang.String

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId"></a>

```java
public java.lang.String getSddcId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `swapBillingHostId`<sup>Required</sup> <a name="swapBillingHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId"></a>

```java
public java.lang.String getSwapBillingHostId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `upgradedReplacementEsxiHostId`<sup>Required</sup> <a name="upgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId"></a>

```java
public java.lang.String getUpgradedReplacementEsxiHostId();
```

- *Type:* java.lang.String

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```java
public java.lang.String getVmwareSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOcvpEsxiHostsEsxiHostCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a>

---


### DataOciOcvpEsxiHostsFilterList <a name="DataOciOcvpEsxiHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsFilterList;

new DataOciOcvpEsxiHostsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get"></a>

```java
public DataOciOcvpEsxiHostsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>>

---


### DataOciOcvpEsxiHostsFilterOutputReference <a name="DataOciOcvpEsxiHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_esxi_hosts.DataOciOcvpEsxiHostsFilterOutputReference;

new DataOciOcvpEsxiHostsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>

---



