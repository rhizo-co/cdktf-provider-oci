# `dataOciFusionAppsFusionEnvironmentAdminUsers` Submodule <a name="`dataOciFusionAppsFusionEnvironmentAdminUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentAdminUsers <a name="DataOciFusionAppsFusionEnvironmentAdminUsers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users oci_fusion_apps_fusion_environment_admin_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsers;

DataOciFusionAppsFusionEnvironmentAdminUsers.Builder.create(Construct scope, java.lang.String id)
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
    .fusionEnvironmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFusionAppsFusionEnvironmentAdminUsersFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUsers#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#id DataOciFusionAppsFusionEnvironmentAdminUsers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUsers#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#filter DataOciFusionAppsFusionEnvironmentAdminUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#id DataOciFusionAppsFusionEnvironmentAdminUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciFusionAppsFusionEnvironmentAdminUsersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentAdminUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsers;

DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsers;

DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsers;

DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsers;

DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentAdminUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentAdminUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciFusionAppsFusionEnvironmentAdminUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentAdminUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.adminUserCollection">adminUserCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList">DataOciFusionAppsFusionEnvironmentAdminUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `adminUserCollection`<sup>Required</sup> <a name="adminUserCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.adminUserCollection"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList getAdminUserCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filter"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList">DataOciFusionAppsFusionEnvironmentAdminUsersFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>>

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentIdInput"></a>

```java
public java.lang.String getFusionEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection;

DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection.builder()
    .build();
```


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems;

DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems.builder()
    .build();
```


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems;

DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems.builder()
    .build();
```


### DataOciFusionAppsFusionEnvironmentAdminUsersConfig <a name="DataOciFusionAppsFusionEnvironmentAdminUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersConfig;

DataOciFusionAppsFusionEnvironmentAdminUsersConfig.builder()
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
    .fusionEnvironmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFusionAppsFusionEnvironmentAdminUsersFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUsers#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#id DataOciFusionAppsFusionEnvironmentAdminUsers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#fusion_environment_id DataOciFusionAppsFusionEnvironmentAdminUsers#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#filter DataOciFusionAppsFusionEnvironmentAdminUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#id DataOciFusionAppsFusionEnvironmentAdminUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFusionAppsFusionEnvironmentAdminUsersFilter <a name="DataOciFusionAppsFusionEnvironmentAdminUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersFilter;

DataOciFusionAppsFusionEnvironmentAdminUsersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#name DataOciFusionAppsFusionEnvironmentAdminUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#values DataOciFusionAppsFusionEnvironmentAdminUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#regex DataOciFusionAppsFusionEnvironmentAdminUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#name DataOciFusionAppsFusionEnvironmentAdminUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#values DataOciFusionAppsFusionEnvironmentAdminUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_admin_users#regex DataOciFusionAppsFusionEnvironmentAdminUsers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList;

new DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.get"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference;

new DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsOutputReference.property.internalValue"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItems</a>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList;

new DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.get"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference;

new DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.items"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsItemsList</a>

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList;

new DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.get"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference;

new DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.items"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollectionOutputReference.property.internalValue"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection">DataOciFusionAppsFusionEnvironmentAdminUsersAdminUserCollection</a>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersFilterList <a name="DataOciFusionAppsFusionEnvironmentAdminUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList;

new DataOciFusionAppsFusionEnvironmentAdminUsersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.get"></a>

```java
public DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>>

---


### DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_admin_users.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference;

new DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentAdminUsers.DataOciFusionAppsFusionEnvironmentAdminUsersFilter">DataOciFusionAppsFusionEnvironmentAdminUsersFilter</a>

---



