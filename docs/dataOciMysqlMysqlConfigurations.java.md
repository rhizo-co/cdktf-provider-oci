# `dataOciMysqlMysqlConfigurations` Submodule <a name="`dataOciMysqlMysqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfigurations <a name="DataOciMysqlMysqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations oci_mysql_mysql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurations;

DataOciMysqlMysqlConfigurations.Builder.create(Construct scope, java.lang.String id)
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
//  .configurationId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMysqlMysqlConfigurationsFilter>)
//  .id(java.lang.String)
//  .shapeName(java.lang.String)
//  .state(java.lang.String)
//  .type(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.type">type</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shapeName`<sup>Optional</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.shapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.type"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName">resetShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMysqlMysqlConfigurationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>>

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId"></a>

```java
public void resetId()
```

##### `resetShapeName` <a name="resetShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName"></a>

```java
public void resetShapeName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState"></a>

```java
public void resetState()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurations;

DataOciMysqlMysqlConfigurations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurations;

DataOciMysqlMysqlConfigurations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurations;

DataOciMysqlMysqlConfigurations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurations;

DataOciMysqlMysqlConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMysqlMysqlConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMysqlMysqlConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMysqlMysqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput">typeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter"></a>

```java
public DataOciMysqlMysqlConfigurationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput"></a>

```java
public java.util.List<java.lang.String> getTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationsConfig <a name="DataOciMysqlMysqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfig;

DataOciMysqlMysqlConfigurationsConfig.builder()
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
//  .configurationId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMysqlMysqlConfigurationsFilter>)
//  .id(java.lang.String)
//  .shapeName(java.lang.String)
//  .state(java.lang.String)
//  .type(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shapeName`<sup>Optional</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

### DataOciMysqlMysqlConfigurationsConfigurations <a name="DataOciMysqlMysqlConfigurationsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurations;

DataOciMysqlMysqlConfigurationsConfigurations.builder()
    .build();
```


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables;

DataOciMysqlMysqlConfigurationsConfigurationsInitVariables.builder()
    .build();
```


### DataOciMysqlMysqlConfigurationsConfigurationsVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables;

DataOciMysqlMysqlConfigurationsConfigurationsVariables.builder()
    .build();
```


### DataOciMysqlMysqlConfigurationsFilter <a name="DataOciMysqlMysqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsFilter;

DataOciMysqlMysqlConfigurationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList;

new DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference;

new DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```java
public java.lang.String getLowerCaseTableNames();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsInitVariables getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsList <a name="DataOciMysqlMysqlConfigurationsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsList;

new DataOciMysqlMysqlConfigurationsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlConfigurationsConfigurationsOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference;

new DataOciMysqlMysqlConfigurationsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId">parentConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initVariables`<sup>Required</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList getInitVariables();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a>

---

##### `parentConfigurationId`<sup>Required</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId"></a>

```java
public java.lang.String getParentConfigurationId();
```

- *Type:* java.lang.String

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsVariablesList getVariables();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList;

new DataOciMysqlMysqlConfigurationsConfigurationsVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference;

new DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables">bigTables</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType">completionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile">localInfile</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles">mandatoryRoles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors">maxConnectErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime">maxExecutionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize">queryPreallocSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings">sqlWarnings</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation">transactionIsolation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit"></a>

```java
public IResolvable getAutocommit();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bigTables`<sup>Required</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables"></a>

```java
public IResolvable getBigTables();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `binlogExpireLogsSeconds`<sup>Required</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```java
public java.lang.Number getBinlogExpireLogsSeconds();
```

- *Type:* java.lang.Number

---

##### `binlogRowMetadata`<sup>Required</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata"></a>

```java
public java.lang.String getBinlogRowMetadata();
```

- *Type:* java.lang.String

---

##### `binlogRowValueOptions`<sup>Required</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions"></a>

```java
public java.lang.String getBinlogRowValueOptions();
```

- *Type:* java.lang.String

---

##### `binlogTransactionCompression`<sup>Required</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression"></a>

```java
public IResolvable getBinlogTransactionCompression();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `completionType`<sup>Required</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType"></a>

```java
public java.lang.String getCompletionType();
```

- *Type:* java.lang.String

---

##### `connectionMemoryChunkSize`<sup>Required</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```java
public java.lang.Number getConnectionMemoryChunkSize();
```

- *Type:* java.lang.Number

---

##### `connectionMemoryLimit`<sup>Required</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit"></a>

```java
public java.lang.String getConnectionMemoryLimit();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `cteMaxRecursionDepth`<sup>Required</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```java
public java.lang.String getCteMaxRecursionDepth();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationPlugin`<sup>Required</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```java
public java.lang.String getDefaultAuthenticationPlugin();
```

- *Type:* java.lang.String

---

##### `foreignKeyChecks`<sup>Required</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks"></a>

```java
public IResolvable getForeignKeyChecks();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `generatedRandomPasswordLength`<sup>Required</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```java
public java.lang.Number getGeneratedRandomPasswordLength();
```

- *Type:* java.lang.Number

---

##### `globalConnectionMemoryLimit`<sup>Required</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```java
public java.lang.String getGlobalConnectionMemoryLimit();
```

- *Type:* java.lang.String

---

##### `globalConnectionMemoryTracking`<sup>Required</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```java
public IResolvable getGlobalConnectionMemoryTracking();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `groupReplicationConsistency`<sup>Required</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency"></a>

```java
public java.lang.String getGroupReplicationConsistency();
```

- *Type:* java.lang.String

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolDumpPct`<sup>Required</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```java
public java.lang.Number getInnodbBufferPoolDumpPct();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolInstances`<sup>Required</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```java
public java.lang.Number getInnodbBufferPoolInstances();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolSize`<sup>Required</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize"></a>

```java
public java.lang.String getInnodbBufferPoolSize();
```

- *Type:* java.lang.String

---

##### `innodbDdlBufferSize`<sup>Required</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize"></a>

```java
public java.lang.String getInnodbDdlBufferSize();
```

- *Type:* java.lang.String

---

##### `innodbDdlThreads`<sup>Required</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads"></a>

```java
public java.lang.Number getInnodbDdlThreads();
```

- *Type:* java.lang.Number

---

##### `innodbFtEnableStopword`<sup>Required</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword"></a>

```java
public IResolvable getInnodbFtEnableStopword();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `innodbFtMaxTokenSize`<sup>Required</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```java
public java.lang.Number getInnodbFtMaxTokenSize();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

---

##### `innodbFtNumWordOptimize`<sup>Required</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```java
public java.lang.Number getInnodbFtNumWordOptimize();
```

- *Type:* java.lang.Number

---

##### `innodbFtResultCacheLimit`<sup>Required</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```java
public java.lang.String getInnodbFtResultCacheLimit();
```

- *Type:* java.lang.String

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `innodbLogWriterThreads`<sup>Required</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads"></a>

```java
public IResolvable getInnodbLogWriterThreads();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `innodbMaxPurgeLag`<sup>Required</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```java
public java.lang.String getInnodbMaxPurgeLag();
```

- *Type:* java.lang.String

---

##### `innodbMaxPurgeLagDelay`<sup>Required</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```java
public java.lang.Number getInnodbMaxPurgeLagDelay();
```

- *Type:* java.lang.Number

---

##### `innodbStatsPersistentSamplePages`<sup>Required</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```java
public java.lang.String getInnodbStatsPersistentSamplePages();
```

- *Type:* java.lang.String

---

##### `innodbStatsTransientSamplePages`<sup>Required</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```java
public java.lang.String getInnodbStatsTransientSamplePages();
```

- *Type:* java.lang.String

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

---

##### `localInfile`<sup>Required</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile"></a>

```java
public IResolvable getLocalInfile();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mandatoryRoles`<sup>Required</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles"></a>

```java
public java.lang.String getMandatoryRoles();
```

- *Type:* java.lang.String

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

---

##### `maxBinlogCacheSize`<sup>Required</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize"></a>

```java
public java.lang.String getMaxBinlogCacheSize();
```

- *Type:* java.lang.String

---

##### `maxConnectErrors`<sup>Required</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors"></a>

```java
public java.lang.String getMaxConnectErrors();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxExecutionTime`<sup>Required</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime"></a>

```java
public java.lang.String getMaxExecutionTime();
```

- *Type:* java.lang.String

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize"></a>

```java
public java.lang.String getMaxHeapTableSize();
```

- *Type:* java.lang.String

---

##### `maxPreparedStmtCount`<sup>Required</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount"></a>

```java
public java.lang.Number getMaxPreparedStmtCount();
```

- *Type:* java.lang.Number

---

##### `mysqlFirewallMode`<sup>Required</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode"></a>

```java
public IResolvable getMysqlFirewallMode();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mysqlxConnectTimeout`<sup>Required</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```java
public java.lang.Number getMysqlxConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxDeflateDefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxDeflateMaxClientCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```java
public java.lang.Number getMysqlxDocumentIdUniquePrefix();
```

- *Type:* java.lang.Number

---

##### `mysqlxEnableHelloNotice`<sup>Required</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```java
public IResolvable getMysqlxEnableHelloNotice();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```java
public java.lang.Number getMysqlxIdleWorkerThreadTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxInteractiveTimeout`<sup>Required</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```java
public java.lang.Number getMysqlxInteractiveTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxLz4DefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxLz4MaxClientCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxMaxAllowedPacket`<sup>Required</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```java
public java.lang.Number getMysqlxMaxAllowedPacket();
```

- *Type:* java.lang.Number

---

##### `mysqlxMinWorkerThreads`<sup>Required</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```java
public java.lang.Number getMysqlxMinWorkerThreads();
```

- *Type:* java.lang.Number

---

##### `mysqlxReadTimeout`<sup>Required</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout"></a>

```java
public java.lang.Number getMysqlxReadTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxWaitTimeout`<sup>Required</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```java
public java.lang.Number getMysqlxWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxWriteTimeout`<sup>Required</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```java
public java.lang.Number getMysqlxWriteTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxZstdDefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxZstdMaxClientCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlZstdDefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

---

##### `parserMaxMemSize`<sup>Required</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize"></a>

```java
public java.lang.String getParserMaxMemSize();
```

- *Type:* java.lang.String

---

##### `queryAllocBlockSize`<sup>Required</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize"></a>

```java
public java.lang.String getQueryAllocBlockSize();
```

- *Type:* java.lang.String

---

##### `queryPreallocSize`<sup>Required</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize"></a>

```java
public java.lang.String getQueryPreallocSize();
```

- *Type:* java.lang.String

---

##### `regexpTimeLimit`<sup>Required</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit"></a>

```java
public java.lang.Number getRegexpTimeLimit();
```

- *Type:* java.lang.Number

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize"></a>

```java
public java.lang.String getSortBufferSize();
```

- *Type:* java.lang.String

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```java
public IResolvable getSqlRequirePrimaryKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sqlWarnings`<sup>Required</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings"></a>

```java
public IResolvable getSqlWarnings();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `threadPoolDedicatedListeners`<sup>Required</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```java
public IResolvable getThreadPoolDedicatedListeners();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```java
public java.lang.Number getThreadPoolMaxTransactionsLimit();
```

- *Type:* java.lang.Number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize"></a>

```java
public java.lang.String getTmpTableSize();
```

- *Type:* java.lang.String

---

##### `transactionIsolation`<sup>Required</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation"></a>

```java
public java.lang.String getTransactionIsolation();
```

- *Type:* java.lang.String

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlConfigurationsConfigurationsVariables getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a>

---


### DataOciMysqlMysqlConfigurationsFilterList <a name="DataOciMysqlMysqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsFilterList;

new DataOciMysqlMysqlConfigurationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get"></a>

```java
public DataOciMysqlMysqlConfigurationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>>

---


### DataOciMysqlMysqlConfigurationsFilterOutputReference <a name="DataOciMysqlMysqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_configurations.DataOciMysqlMysqlConfigurationsFilterOutputReference;

new DataOciMysqlMysqlConfigurationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>

---



