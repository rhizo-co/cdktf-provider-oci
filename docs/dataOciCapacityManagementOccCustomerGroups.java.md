# `dataOciCapacityManagementOccCustomerGroups` Submodule <a name="`dataOciCapacityManagementOccCustomerGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCustomerGroups <a name="DataOciCapacityManagementOccCustomerGroups" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups oci_capacity_management_occ_customer_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroups;

DataOciCapacityManagementOccCustomerGroups.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementOccCustomerGroupsFilter>)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#compartment_id DataOciCapacityManagementOccCustomerGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#display_name DataOciCapacityManagementOccCustomerGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#id DataOciCapacityManagementOccCustomerGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#status DataOciCapacityManagementOccCustomerGroups#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#compartment_id DataOciCapacityManagementOccCustomerGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#display_name DataOciCapacityManagementOccCustomerGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#filter DataOciCapacityManagementOccCustomerGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#id DataOciCapacityManagementOccCustomerGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#status DataOciCapacityManagementOccCustomerGroups#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCapacityManagementOccCustomerGroupsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCustomerGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroups;

DataOciCapacityManagementOccCustomerGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroups;

DataOciCapacityManagementOccCustomerGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroups;

DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroups;

DataOciCapacityManagementOccCustomerGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCapacityManagementOccCustomerGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCustomerGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCapacityManagementOccCustomerGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCapacityManagementOccCustomerGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCustomerGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList">DataOciCapacityManagementOccCustomerGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.occCustomerGroupCollection">occCustomerGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filter"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList">DataOciCapacityManagementOccCustomerGroupsFilterList</a>

---

##### `occCustomerGroupCollection`<sup>Required</sup> <a name="occCustomerGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.occCustomerGroupCollection"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList getOccCustomerGroupCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCustomerGroupsConfig <a name="DataOciCapacityManagementOccCustomerGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsConfig;

DataOciCapacityManagementOccCustomerGroupsConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementOccCustomerGroupsFilter>)
//  .id(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#compartment_id DataOciCapacityManagementOccCustomerGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#display_name DataOciCapacityManagementOccCustomerGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#id DataOciCapacityManagementOccCustomerGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#status DataOciCapacityManagementOccCustomerGroups#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#compartment_id DataOciCapacityManagementOccCustomerGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#display_name DataOciCapacityManagementOccCustomerGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#filter DataOciCapacityManagementOccCustomerGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#id DataOciCapacityManagementOccCustomerGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#status DataOciCapacityManagementOccCustomerGroups#status}.

---

### DataOciCapacityManagementOccCustomerGroupsFilter <a name="DataOciCapacityManagementOccCustomerGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsFilter;

DataOciCapacityManagementOccCustomerGroupsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#name DataOciCapacityManagementOccCustomerGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#values DataOciCapacityManagementOccCustomerGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#regex DataOciCapacityManagementOccCustomerGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#name DataOciCapacityManagementOccCustomerGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#values DataOciCapacityManagementOccCustomerGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_customer_groups#regex DataOciCapacityManagementOccCustomerGroups#regex}.

---

### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection;

DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection.builder()
    .build();
```


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems;

DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems.builder()
    .build();
```


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct;

DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCustomerGroupsFilterList <a name="DataOciCapacityManagementOccCustomerGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsFilterList;

new DataOciCapacityManagementOccCustomerGroupsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.get"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>>

---


### DataOciCapacityManagementOccCustomerGroupsFilterOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference;

new DataOciCapacityManagementOccCustomerGroupsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsFilter">DataOciCapacityManagementOccCustomerGroupsFilter</a>

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList;

new DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.get"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference;

new DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStruct</a>

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList;

new DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.get"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference;

new DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.customersList">customersList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `customersList`<sup>Required</sup> <a name="customersList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.customersList"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList getCustomersList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsCustomersListStructList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItems</a>

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList;

new DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.get"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference <a name="DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_occ_customer_groups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference;

new DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.items"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCustomerGroups.DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection">DataOciCapacityManagementOccCustomerGroupsOccCustomerGroupCollection</a>

---



