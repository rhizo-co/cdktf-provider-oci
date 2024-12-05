# `dataOciComputeCloudAtCustomerCccInfrastructures` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructures <a name="DataOciComputeCloudAtCustomerCccInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures oci_compute_cloud_at_customer_ccc_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructures;

DataOciComputeCloudAtCustomerCccInfrastructures.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .cccInfrastructureId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciComputeCloudAtCustomerCccInfrastructuresFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.cccInfrastructureId">cccInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}.

---

##### `cccInfrastructureId`<sup>Optional</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.cccInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId">resetCccInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciComputeCloudAtCustomerCccInfrastructuresFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCccInfrastructureId` <a name="resetCccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId"></a>

```java
public void resetCccInfrastructureId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains"></a>

```java
public void resetDisplayNameContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructures;

DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructures;

DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructures;

DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructures;

DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection">cccInfrastructureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput">cccInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId">cccInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cccInfrastructureCollection`<sup>Required</sup> <a name="cccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList getCccInfrastructureCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `cccInfrastructureIdInput`<sup>Optional</sup> <a name="cccInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput"></a>

```java
public java.lang.String getCccInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput"></a>

```java
public java.lang.String getDisplayNameContainsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `cccInfrastructureId`<sup>Required</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId"></a>

```java
public java.lang.String getCccInfrastructureId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation;

DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation.builder()
    .build();
```


### DataOciComputeCloudAtCustomerCccInfrastructuresConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig;

DataOciComputeCloudAtCustomerCccInfrastructuresConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .cccInfrastructureId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciComputeCloudAtCustomerCccInfrastructuresFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId">cccInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}.

---

##### `cccInfrastructureId`<sup>Optional</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId"></a>

```java
public java.lang.String getCccInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}.

---

### DataOciComputeCloudAtCustomerCccInfrastructuresFilter <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter;

DataOciComputeCloudAtCustomerCccInfrastructuresFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">capacityStorageTrayCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount">computeNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount">managementNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">performanceStorageTrayCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityStorageTrayCount`<sup>Required</sup> <a name="capacityStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```java
public java.lang.Number getCapacityStorageTrayCount();
```

- *Type:* java.lang.Number

---

##### `computeNodeCount`<sup>Required</sup> <a name="computeNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```java
public java.lang.Number getComputeNodeCount();
```

- *Type:* java.lang.Number

---

##### `managementNodeCount`<sup>Required</sup> <a name="managementNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```java
public java.lang.Number getManagementNodeCount();
```

- *Type:* java.lang.Number

---

##### `performanceStorageTrayCount`<sup>Required</sup> <a name="performanceStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```java
public java.lang.Number getPerformanceStorageTrayCount();
```

- *Type:* java.lang.Number

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">bgpTopology</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">oracleAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">peerInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgpTopology`<sup>Required</sup> <a name="bgpTopology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```java
public java.lang.String getBgpTopology();
```

- *Type:* java.lang.String

---

##### `oracleAsn`<sup>Required</sup> <a name="oracleAsn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```java
public java.lang.Number getOracleAsn();
```

- *Type:* java.lang.Number

---

##### `peerInformation`<sup>Required</sup> <a name="peerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList getPeerInformation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">uplinkHsrpGroup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">uplinkVlan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uplinkHsrpGroup`<sup>Required</sup> <a name="uplinkHsrpGroup" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```java
public java.lang.Number getUplinkHsrpGroup();
```

- *Type:* java.lang.Number

---

##### `uplinkVlan`<sup>Required</sup> <a name="uplinkVlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```java
public java.lang.Number getUplinkVlan();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps">dnsIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">infrastructureRoutingDynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">infrastructureRoutingStatic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes">managementNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">mgmtVipHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">mgmtVipIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps">spineIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip">spineVip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">uplinkDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">uplinkGatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">uplinkNetmask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">uplinkPortCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">uplinkPortForwardErrorCorrection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">uplinkPortSpeedInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">uplinkVlanMtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```java
public java.util.List<java.lang.String> getDnsIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `infrastructureRoutingDynamic`<sup>Required</sup> <a name="infrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList getInfrastructureRoutingDynamic();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `infrastructureRoutingStatic`<sup>Required</sup> <a name="infrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList getInfrastructureRoutingStatic();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `managementNodes`<sup>Required</sup> <a name="managementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList getManagementNodes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `mgmtVipHostname`<sup>Required</sup> <a name="mgmtVipHostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```java
public java.lang.String getMgmtVipHostname();
```

- *Type:* java.lang.String

---

##### `mgmtVipIp`<sup>Required</sup> <a name="mgmtVipIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```java
public java.lang.String getMgmtVipIp();
```

- *Type:* java.lang.String

---

##### `spineIps`<sup>Required</sup> <a name="spineIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```java
public java.util.List<java.lang.String> getSpineIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spineVip`<sup>Required</sup> <a name="spineVip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```java
public java.lang.String getSpineVip();
```

- *Type:* java.lang.String

---

##### `uplinkDomain`<sup>Required</sup> <a name="uplinkDomain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```java
public java.lang.String getUplinkDomain();
```

- *Type:* java.lang.String

---

##### `uplinkGatewayIp`<sup>Required</sup> <a name="uplinkGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```java
public java.lang.String getUplinkGatewayIp();
```

- *Type:* java.lang.String

---

##### `uplinkNetmask`<sup>Required</sup> <a name="uplinkNetmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```java
public java.lang.String getUplinkNetmask();
```

- *Type:* java.lang.String

---

##### `uplinkPortCount`<sup>Required</sup> <a name="uplinkPortCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```java
public java.lang.Number getUplinkPortCount();
```

- *Type:* java.lang.Number

---

##### `uplinkPortForwardErrorCorrection`<sup>Required</sup> <a name="uplinkPortForwardErrorCorrection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```java
public java.lang.String getUplinkPortForwardErrorCorrection();
```

- *Type:* java.lang.String

---

##### `uplinkPortSpeedInGbps`<sup>Required</sup> <a name="uplinkPortSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```java
public java.lang.Number getUplinkPortSpeedInGbps();
```

- *Type:* java.lang.Number

---

##### `uplinkVlanMtu`<sup>Required</sup> <a name="uplinkVlanMtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```java
public java.lang.Number getUplinkVlanMtu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId">cccUpgradeScheduleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails">connectionDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState">connectionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory">infrastructureInventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration">infrastructureNetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint">provisioningFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin">provisioningPin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation">upgradeInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cccUpgradeScheduleId`<sup>Required</sup> <a name="cccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId"></a>

```java
public java.lang.String getCccUpgradeScheduleId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails"></a>

```java
public java.lang.String getConnectionDetails();
```

- *Type:* java.lang.String

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState"></a>

```java
public java.lang.String getConnectionState();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infrastructureInventory`<sup>Required</sup> <a name="infrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList getInfrastructureInventory();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a>

---

##### `infrastructureNetworkConfiguration`<sup>Required</sup> <a name="infrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList getInfrastructureNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `provisioningFingerprint`<sup>Required</sup> <a name="provisioningFingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint"></a>

```java
public java.lang.String getProvisioningFingerprint();
```

- *Type:* java.lang.String

---

##### `provisioningPin`<sup>Required</sup> <a name="provisioningPin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin"></a>

```java
public java.lang.String getProvisioningPin();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `upgradeInformation`<sup>Required</sup> <a name="upgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList getUpgradeInformation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion">currentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive">isActive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration">scheduledUpgradeDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">timeOfScheduledUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion"></a>

```java
public java.lang.String getCurrentVersion();
```

- *Type:* java.lang.String

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive"></a>

```java
public IResolvable getIsActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `scheduledUpgradeDuration`<sup>Required</sup> <a name="scheduledUpgradeDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```java
public java.lang.String getScheduledUpgradeDuration();
```

- *Type:* java.lang.String

---

##### `timeOfScheduledUpgrade`<sup>Required</sup> <a name="timeOfScheduledUpgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```java
public java.lang.String getTimeOfScheduledUpgrade();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList;

new DataOciComputeCloudAtCustomerCccInfrastructuresFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get"></a>

```java
public DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_compute_cloud_at_customer_ccc_infrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference;

new DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>

---



