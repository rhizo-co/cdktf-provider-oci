# `dataOciPsqlDefaultConfigurations` Submodule <a name="`dataOciPsqlDefaultConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDefaultConfigurations <a name="DataOciPsqlDefaultConfigurations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations oci_psql_default_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurations;

DataOciPsqlDefaultConfigurations.Builder.create(Construct scope, java.lang.String id)
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
//  .configurationId(java.lang.String)
//  .dbVersion(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciPsqlDefaultConfigurationsFilter>)
//  .id(java.lang.String)
//  .shape(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#filter DataOciPsqlDefaultConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciPsqlDefaultConfigurationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>>

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetId"></a>

```java
public void resetId()
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetShape"></a>

```java
public void resetShape()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurations;

DataOciPsqlDefaultConfigurations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurations;

DataOciPsqlDefaultConfigurations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurations;

DataOciPsqlDefaultConfigurations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurations;

DataOciPsqlDefaultConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciPsqlDefaultConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciPsqlDefaultConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciPsqlDefaultConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDefaultConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.defaultConfigurationCollection">defaultConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList">DataOciPsqlDefaultConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `defaultConfigurationCollection`<sup>Required</sup> <a name="defaultConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.defaultConfigurationCollection"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList getDefaultConfigurationCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filter"></a>

```java
public DataOciPsqlDefaultConfigurationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList">DataOciPsqlDefaultConfigurationsFilterList</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDefaultConfigurationsConfig <a name="DataOciPsqlDefaultConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsConfig;

DataOciPsqlDefaultConfigurationsConfig.builder()
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
//  .configurationId(java.lang.String)
//  .dbVersion(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciPsqlDefaultConfigurationsFilter>)
//  .id(java.lang.String)
//  .shape(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#filter DataOciPsqlDefaultConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}.

---

### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection;

DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection.builder()
    .build();
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems;

DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems.builder()
    .build();
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails;

DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails.builder()
    .build();
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems;

DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems.builder()
    .build();
```


### DataOciPsqlDefaultConfigurationsFilter <a name="DataOciPsqlDefaultConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsFilter;

DataOciPsqlDefaultConfigurationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue">defaultConfigValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable">isOverridable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired">isRestartRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```java
public java.lang.String getAllowedValues();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `defaultConfigValue`<sup>Required</sup> <a name="defaultConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```java
public java.lang.String getDefaultConfigValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isOverridable`<sup>Required</sup> <a name="isOverridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```java
public IResolvable getIsOverridable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRestartRequired`<sup>Required</sup> <a name="isRestartRequired" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```java
public IResolvable getIsRestartRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.isFlexible">isFlexible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.configurationDetails"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList getConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList</a>

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```java
public java.lang.Number getInstanceMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```java
public java.lang.Number getInstanceOcpuCount();
```

- *Type:* java.lang.Number

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.isFlexible"></a>

```java
public IResolvable getIsFlexible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference;

new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.items"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.internalValue"></a>

```java
public DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection</a>

---


### DataOciPsqlDefaultConfigurationsFilterList <a name="DataOciPsqlDefaultConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsFilterList;

new DataOciPsqlDefaultConfigurationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get"></a>

```java
public DataOciPsqlDefaultConfigurationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>>

---


### DataOciPsqlDefaultConfigurationsFilterOutputReference <a name="DataOciPsqlDefaultConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_default_configurations.DataOciPsqlDefaultConfigurationsFilterOutputReference;

new DataOciPsqlDefaultConfigurationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>

---



