# `dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege oci_database_management_managed_database_user_object_privilege}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Builder.create(Construct scope, java.lang.String id)
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
    .managedDatabaseId(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.builder()
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
    .managedDatabaseId(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems;

DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList;

new DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_object_privilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.common">common</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantOption">grantOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantor">grantor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.hierarchy">hierarchy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.inherited">inherited</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.common"></a>

```java
public java.lang.String getCommon();
```

- *Type:* java.lang.String

---

##### `grantOption`<sup>Required</sup> <a name="grantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantOption"></a>

```java
public java.lang.String getGrantOption();
```

- *Type:* java.lang.String

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantor"></a>

```java
public java.lang.String getGrantor();
```

- *Type:* java.lang.String

---

##### `hierarchy`<sup>Required</sup> <a name="hierarchy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.hierarchy"></a>

```java
public java.lang.String getHierarchy();
```

- *Type:* java.lang.String

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.inherited"></a>

```java
public java.lang.String getInherited();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems</a>

---



