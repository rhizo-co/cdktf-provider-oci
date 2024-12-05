# `dataOciCapacityManagementInternalNamespaceOccOverviews` Submodule <a name="`dataOciCapacityManagementInternalNamespaceOccOverviews` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviews <a name="DataOciCapacityManagementInternalNamespaceOccOverviews" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews oci_capacity_management_internal_namespace_occ_overviews}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviews;

DataOciCapacityManagementInternalNamespaceOccOverviews.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .namespace(java.lang.String)
    .occCustomerGroupId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementInternalNamespaceOccOverviewsFilter>)
//  .from(java.lang.String)
//  .id(java.lang.String)
//  .to(java.lang.String)
//  .workloadType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#filter DataOciCapacityManagementInternalNamespaceOccOverviews#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.from"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `to`<sup>Optional</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.to"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.workloadType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetTo">resetTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCapacityManagementInternalNamespaceOccOverviewsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFrom` <a name="resetFrom" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetId"></a>

```java
public void resetId()
```

##### `resetTo` <a name="resetTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetTo"></a>

```java
public void resetTo()
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetWorkloadType"></a>

```java
public void resetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalNamespaceOccOverviews resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviews;

DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviews;

DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviews;

DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviews;

DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalNamespaceOccOverviews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCapacityManagementInternalNamespaceOccOverviews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCapacityManagementInternalNamespaceOccOverviews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalNamespaceOccOverviews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList">DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occOverviewCollection">occOverviewCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupIdInput">occCustomerGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filter"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList">DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList</a>

---

##### `occOverviewCollection`<sup>Required</sup> <a name="occOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occOverviewCollection"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList getOccOverviewCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupIdInput`<sup>Optional</sup> <a name="occCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupIdInput"></a>

```java
public java.lang.String getOccCustomerGroupIdInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviewsConfig <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig;

DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.builder()
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
    .compartmentId(java.lang.String)
    .namespace(java.lang.String)
    .occCustomerGroupId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementInternalNamespaceOccOverviewsFilter>)
//  .from(java.lang.String)
//  .id(java.lang.String)
//  .to(java.lang.String)
//  .workloadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#filter DataOciCapacityManagementInternalNamespaceOccOverviews#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `to`<sup>Optional</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}.

---

### DataOciCapacityManagementInternalNamespaceOccOverviewsFilter <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter;

DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#name DataOciCapacityManagementInternalNamespaceOccOverviews#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#values DataOciCapacityManagementInternalNamespaceOccOverviews#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#regex DataOciCapacityManagementInternalNamespaceOccOverviews#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#name DataOciCapacityManagementInternalNamespaceOccOverviews#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#values DataOciCapacityManagementInternalNamespaceOccOverviews#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#regex DataOciCapacityManagementInternalNamespaceOccOverviews#regex}.

---

### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection;

DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection.builder()
    .build();
```


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems;

DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList;

new DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>>

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference;

new DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter">DataOciCapacityManagementInternalNamespaceOccOverviewsFilter</a>

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList;

new DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference;

new DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob">capacityRequestsBlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue">periodValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable">totalAvailable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled">totalCancelled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded">totalDemanded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected">totalRejected</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied">totalSupplied</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled">totalUnfulfilled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob">workloadTypeBreakdownBlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityRequestsBlob`<sup>Required</sup> <a name="capacityRequestsBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob"></a>

```java
public java.lang.String getCapacityRequestsBlob();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `periodValue`<sup>Required</sup> <a name="periodValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue"></a>

```java
public java.lang.String getPeriodValue();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `totalAvailable`<sup>Required</sup> <a name="totalAvailable" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable"></a>

```java
public java.lang.String getTotalAvailable();
```

- *Type:* java.lang.String

---

##### `totalCancelled`<sup>Required</sup> <a name="totalCancelled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled"></a>

```java
public java.lang.String getTotalCancelled();
```

- *Type:* java.lang.String

---

##### `totalDemanded`<sup>Required</sup> <a name="totalDemanded" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded"></a>

```java
public java.lang.String getTotalDemanded();
```

- *Type:* java.lang.String

---

##### `totalRejected`<sup>Required</sup> <a name="totalRejected" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected"></a>

```java
public java.lang.String getTotalRejected();
```

- *Type:* java.lang.String

---

##### `totalSupplied`<sup>Required</sup> <a name="totalSupplied" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied"></a>

```java
public java.lang.String getTotalSupplied();
```

- *Type:* java.lang.String

---

##### `totalUnfulfilled`<sup>Required</sup> <a name="totalUnfulfilled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled"></a>

```java
public java.lang.String getTotalUnfulfilled();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `workloadTypeBreakdownBlob`<sup>Required</sup> <a name="workloadTypeBreakdownBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob"></a>

```java
public java.lang.String getWorkloadTypeBreakdownBlob();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems</a>

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList;

new DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_namespace_occ_overviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference;

new DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection</a>

---



