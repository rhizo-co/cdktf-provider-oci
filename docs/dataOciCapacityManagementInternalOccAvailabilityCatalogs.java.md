# `dataOciCapacityManagementInternalOccAvailabilityCatalogs` Submodule <a name="`dataOciCapacityManagementInternalOccAvailabilityCatalogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalOccAvailabilityCatalogs <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogs" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs oci_capacity_management_internal_occ_availability_catalogs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs;

DataOciCapacityManagementInternalOccAvailabilityCatalogs.Builder.create(Construct scope, java.lang.String id)
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
    .occCustomerGroupId(java.lang.String)
//  .catalogState(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.catalogState">catalogState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}.

---

##### `catalogState`<sup>Optional</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.catalogState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#filter DataOciCapacityManagementInternalOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetCatalogState">resetCatalogState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>>

---

##### `resetCatalogState` <a name="resetCatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetCatalogState"></a>

```java
public void resetCatalogState()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs;

DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs;

DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs;

DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs;

DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCapacityManagementInternalOccAvailabilityCatalogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCapacityManagementInternalOccAvailabilityCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalOccAvailabilityCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection">occAvailabilityCatalogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogStateInput">catalogStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupIdInput">occCustomerGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogState">catalogState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filter"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList</a>

---

##### `occAvailabilityCatalogCollection`<sup>Required</sup> <a name="occAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList getOccAvailabilityCatalogCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a>

---

##### `catalogStateInput`<sup>Optional</sup> <a name="catalogStateInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogStateInput"></a>

```java
public java.lang.String getCatalogStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupIdInput`<sup>Optional</sup> <a name="occCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupIdInput"></a>

```java
public java.lang.String getOccCustomerGroupIdInput();
```

- *Type:* java.lang.String

---

##### `catalogState`<sup>Required</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.catalogState"></a>

```java
public java.lang.String getCatalogState();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig;

DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.builder()
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
    .occCustomerGroupId(java.lang.String)
//  .catalogState(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.catalogState">catalogState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#compartment_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#compartment_id}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#occ_customer_group_id DataOciCapacityManagementInternalOccAvailabilityCatalogs#occ_customer_group_id}.

---

##### `catalogState`<sup>Optional</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.catalogState"></a>

```java
public java.lang.String getCatalogState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#catalog_state DataOciCapacityManagementInternalOccAvailabilityCatalogs#catalog_state}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#display_name DataOciCapacityManagementInternalOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#filter DataOciCapacityManagementInternalOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#id DataOciCapacityManagementInternalOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#namespace DataOciCapacityManagementInternalOccAvailabilityCatalogs#namespace}.

---

### DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter;

DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#name DataOciCapacityManagementInternalOccAvailabilityCatalogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#values DataOciCapacityManagementInternalOccAvailabilityCatalogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#regex DataOciCapacityManagementInternalOccAvailabilityCatalogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#name DataOciCapacityManagementInternalOccAvailabilityCatalogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#values DataOciCapacityManagementInternalOccAvailabilityCatalogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_availability_catalogs#regex DataOciCapacityManagementInternalOccAvailabilityCatalogs#regex}.

---

### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection;

DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection.builder()
    .build();
```


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems;

DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems.builder()
    .build();
```


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails;

DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.get"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>>

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter">DataOciCapacityManagementInternalOccAvailabilityCatalogsFilter</a>

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion">formatVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatVersion`<sup>Required</sup> <a name="formatVersion" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion"></a>

```java
public java.lang.String getFormatVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a>

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState">catalogState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails">metadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogState`<sup>Required</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState"></a>

```java
public java.lang.String getCatalogState();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `metadataDetails`<sup>Required</sup> <a name="metadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList getMetadataDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a>

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference <a name="DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_availability_catalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference;

new DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccAvailabilityCatalogs.DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementInternalOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a>

---



