# `dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users oci_database_management_managed_database_user_proxied_for_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .opcNamedCredentialId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#managed_database_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#user_name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#opc_named_credential_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#managed_database_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#user_name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#filter DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#opc_named_credential_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetName"></a>

```java
public void resetName()
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.resetOpcNamedCredentialId"></a>

```java
public void resetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.proxiedForUserCollection">proxiedForUserCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.filter"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList</a>

---

##### `proxiedForUserCollection`<sup>Required</sup> <a name="proxiedForUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.proxiedForUserCollection"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList getProxiedForUserCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.opcNamedCredentialIdInput"></a>

```java
public java.lang.String getOpcNamedCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .opcNamedCredentialId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#managed_database_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#user_name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#managed_database_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#user_name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#filter DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersConfig.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#values DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#regex DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#name DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#values DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_proxied_for_users#regex DataOciDatabaseManagementManagedDatabaseUserProxiedForUsers#regex}.

---

### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems;

DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList;

new DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>>

---


### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference;

new DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList;

new DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.authentication">authentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.flags">flags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.authentication"></a>

```java
public java.lang.String getAuthentication();
```

- *Type:* java.lang.String

---

##### `flags`<sup>Required</sup> <a name="flags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.flags"></a>

```java
public java.lang.String getFlags();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList;

new DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_user_proxied_for_users.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference;

new DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserProxiedForUsers.DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection">DataOciDatabaseManagementManagedDatabaseUserProxiedForUsersProxiedForUserCollection</a>

---



