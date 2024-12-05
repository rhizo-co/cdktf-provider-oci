# `dataOciPsqlConfigurations` Submodule <a name="`dataOciPsqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlConfigurations <a name="DataOciPsqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations oci_psql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurations;

DataOciPsqlConfigurations.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .configurationId(java.lang.String)
//  .dbVersion(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciPsqlConfigurationsFilter>)
//  .id(java.lang.String)
//  .shape(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#compartment_id DataOciPsqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#configuration_id DataOciPsqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#db_version DataOciPsqlConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#display_name DataOciPsqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#id DataOciPsqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#shape DataOciPsqlConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#state DataOciPsqlConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#compartment_id DataOciPsqlConfigurations#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#configuration_id DataOciPsqlConfigurations#configuration_id}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#db_version DataOciPsqlConfigurations#db_version}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#display_name DataOciPsqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#filter DataOciPsqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#id DataOciPsqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#shape DataOciPsqlConfigurations#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#state DataOciPsqlConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciPsqlConfigurationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetId"></a>

```java
public void resetId()
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetShape"></a>

```java
public void resetShape()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurations;

DataOciPsqlConfigurations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurations;

DataOciPsqlConfigurations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurations;

DataOciPsqlConfigurations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurations;

DataOciPsqlConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciPsqlConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciPsqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciPsqlConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciPsqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationCollection">configurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList">DataOciPsqlConfigurationsConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList">DataOciPsqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `configurationCollection`<sup>Required</sup> <a name="configurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationCollection"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionList getConfigurationCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList">DataOciPsqlConfigurationsConfigurationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filter"></a>

```java
public DataOciPsqlConfigurationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList">DataOciPsqlConfigurationsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlConfigurationsConfig <a name="DataOciPsqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfig;

DataOciPsqlConfigurationsConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .configurationId(java.lang.String)
//  .dbVersion(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciPsqlConfigurationsFilter>)
//  .id(java.lang.String)
//  .shape(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#compartment_id DataOciPsqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#configuration_id DataOciPsqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#db_version DataOciPsqlConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#display_name DataOciPsqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#id DataOciPsqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#shape DataOciPsqlConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#state DataOciPsqlConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#compartment_id DataOciPsqlConfigurations#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#configuration_id DataOciPsqlConfigurations#configuration_id}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#db_version DataOciPsqlConfigurations#db_version}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#display_name DataOciPsqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#filter DataOciPsqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#id DataOciPsqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#shape DataOciPsqlConfigurations#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#state DataOciPsqlConfigurations#state}.

---

### DataOciPsqlConfigurationsConfigurationCollection <a name="DataOciPsqlConfigurationsConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollection;

DataOciPsqlConfigurationsConfigurationCollection.builder()
    .build();
```


### DataOciPsqlConfigurationsConfigurationCollectionItems <a name="DataOciPsqlConfigurationsConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItems;

DataOciPsqlConfigurationsConfigurationCollectionItems.builder()
    .build();
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails;

DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails.builder()
    .build();
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems;

DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems.builder()
    .build();
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides;

DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides.builder()
    .build();
```


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems;

DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems.builder()
    .build();
```


### DataOciPsqlConfigurationsFilter <a name="DataOciPsqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsFilter;

DataOciPsqlConfigurationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#name DataOciPsqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#values DataOciPsqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#regex DataOciPsqlConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#name DataOciPsqlConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#values DataOciPsqlConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_configurations#regex DataOciPsqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.get"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue">defaultConfigValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable">isOverridable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired">isRestartRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.overridenConfigValue">overridenConfigValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```java
public java.lang.String getAllowedValues();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `defaultConfigValue`<sup>Required</sup> <a name="defaultConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```java
public java.lang.String getDefaultConfigValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isOverridable`<sup>Required</sup> <a name="isOverridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```java
public IResolvable getIsOverridable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRestartRequired`<sup>Required</sup> <a name="isRestartRequired" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```java
public IResolvable getIsRestartRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `overridenConfigValue`<sup>Required</sup> <a name="overridenConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.overridenConfigValue"></a>

```java
public java.lang.String getOverridenConfigValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItems</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.get"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference;

new DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetails</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.get"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.overridenConfigValue">overridenConfigValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `overridenConfigValue`<sup>Required</sup> <a name="overridenConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.overridenConfigValue"></a>

```java
public java.lang.String getOverridenConfigValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItems</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.get"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference;

new DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.items"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesOutputReference.property.internalValue"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverrides</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsList <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList;

new DataOciPsqlConfigurationsConfigurationCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.get"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference;

new DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbConfigurationOverrides">dbConfigurationOverrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.isFlexible">isFlexible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems">DataOciPsqlConfigurationsConfigurationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.configurationDetails"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList getConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlConfigurationsConfigurationCollectionItemsConfigurationDetailsList</a>

---

##### `dbConfigurationOverrides`<sup>Required</sup> <a name="dbConfigurationOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbConfigurationOverrides"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList getDbConfigurationOverrides();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList">DataOciPsqlConfigurationsConfigurationCollectionItemsDbConfigurationOverridesList</a>

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```java
public java.lang.Number getInstanceMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```java
public java.lang.Number getInstanceOcpuCount();
```

- *Type:* java.lang.Number

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.isFlexible"></a>

```java
public IResolvable getIsFlexible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItems">DataOciPsqlConfigurationsConfigurationCollectionItems</a>

---


### DataOciPsqlConfigurationsConfigurationCollectionList <a name="DataOciPsqlConfigurationsConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionList;

new DataOciPsqlConfigurationsConfigurationCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.get"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciPsqlConfigurationsConfigurationCollectionOutputReference <a name="DataOciPsqlConfigurationsConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference;

new DataOciPsqlConfigurationsConfigurationCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection">DataOciPsqlConfigurationsConfigurationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.items"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionItemsList">DataOciPsqlConfigurationsConfigurationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollectionOutputReference.property.internalValue"></a>

```java
public DataOciPsqlConfigurationsConfigurationCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsConfigurationCollection">DataOciPsqlConfigurationsConfigurationCollection</a>

---


### DataOciPsqlConfigurationsFilterList <a name="DataOciPsqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsFilterList;

new DataOciPsqlConfigurationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.get"></a>

```java
public DataOciPsqlConfigurationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>>

---


### DataOciPsqlConfigurationsFilterOutputReference <a name="DataOciPsqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_psql_configurations.DataOciPsqlConfigurationsFilterOutputReference;

new DataOciPsqlConfigurationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlConfigurations.DataOciPsqlConfigurationsFilter">DataOciPsqlConfigurationsFilter</a>

---



