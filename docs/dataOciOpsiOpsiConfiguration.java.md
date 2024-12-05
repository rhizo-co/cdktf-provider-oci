# `dataOciOpsiOpsiConfiguration` Submodule <a name="`dataOciOpsiOpsiConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfiguration <a name="DataOciOpsiOpsiConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration oci_opsi_opsi_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfiguration;

DataOciOpsiOpsiConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .configItemCustomStatus(java.util.List<java.lang.String>)
    .configItemField(java.util.List<java.lang.String>)
    .configItemsApplicableContext(java.util.List<java.lang.String>)
    .opsiConfigField(java.util.List<java.lang.String>)
    .opsiConfigurationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.configItemCustomStatus">configItemCustomStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.opsiConfigField">opsiConfigField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.opsiConfigurationId">opsiConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configItemCustomStatus`<sup>Required</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.configItemCustomStatus"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}.

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.configItemField"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}.

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.configItemsApplicableContext"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `opsiConfigField`<sup>Required</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.opsiConfigField"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}.

---

##### `opsiConfigurationId`<sup>Required</sup> <a name="opsiConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.opsiConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfiguration;

DataOciOpsiOpsiConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfiguration;

DataOciOpsiOpsiConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfiguration;

DataOciOpsiOpsiConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfiguration;

DataOciOpsiOpsiConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOpsiOpsiConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOpsiOpsiConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOpsiOpsiConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItems">configItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList">DataOciOpsiOpsiConfigurationConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatusInput">configItemCustomStatusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemFieldInput">configItemFieldInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContextInput">configItemsApplicableContextInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigFieldInput">opsiConfigFieldInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationIdInput">opsiConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatus">configItemCustomStatus</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigField">opsiConfigField</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationId">opsiConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configItems`<sup>Required</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItems"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsList getConfigItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList">DataOciOpsiOpsiConfigurationConfigItemsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigType"></a>

```java
public java.lang.String getOpsiConfigType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `configItemCustomStatusInput`<sup>Optional</sup> <a name="configItemCustomStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatusInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemCustomStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemFieldInput`<sup>Optional</sup> <a name="configItemFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemFieldInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemFieldInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsApplicableContextInput`<sup>Optional</sup> <a name="configItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContextInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContextInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `opsiConfigFieldInput`<sup>Optional</sup> <a name="opsiConfigFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigFieldInput"></a>

```java
public java.util.List<java.lang.String> getOpsiConfigFieldInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `opsiConfigurationIdInput`<sup>Optional</sup> <a name="opsiConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationIdInput"></a>

```java
public java.lang.String getOpsiConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `configItemCustomStatus`<sup>Required</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatus"></a>

```java
public java.util.List<java.lang.String> getConfigItemCustomStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemField"></a>

```java
public java.util.List<java.lang.String> getConfigItemField();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContext"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContext();
```

- *Type:* java.util.List<java.lang.String>

---

##### `opsiConfigField`<sup>Required</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigField"></a>

```java
public java.util.List<java.lang.String> getOpsiConfigField();
```

- *Type:* java.util.List<java.lang.String>

---

##### `opsiConfigurationId`<sup>Required</sup> <a name="opsiConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationId"></a>

```java
public java.lang.String getOpsiConfigurationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationConfig <a name="DataOciOpsiOpsiConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfig;

DataOciOpsiOpsiConfigurationConfig.builder()
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
    .configItemCustomStatus(java.util.List<java.lang.String>)
    .configItemField(java.util.List<java.lang.String>)
    .configItemsApplicableContext(java.util.List<java.lang.String>)
    .opsiConfigField(java.util.List<java.lang.String>)
    .opsiConfigurationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemCustomStatus">configItemCustomStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigField">opsiConfigField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigurationId">opsiConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configItemCustomStatus`<sup>Required</sup> <a name="configItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemCustomStatus"></a>

```java
public java.util.List<java.lang.String> getConfigItemCustomStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}.

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemField"></a>

```java
public java.util.List<java.lang.String> getConfigItemField();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}.

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemsApplicableContext"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContext();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `opsiConfigField`<sup>Required</sup> <a name="opsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigField"></a>

```java
public java.util.List<java.lang.String> getOpsiConfigField();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}.

---

##### `opsiConfigurationId`<sup>Required</sup> <a name="opsiConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigurationId"></a>

```java
public java.lang.String getOpsiConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}.

---

### DataOciOpsiOpsiConfigurationConfigItems <a name="DataOciOpsiOpsiConfigurationConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItems;

DataOciOpsiOpsiConfigurationConfigItems.builder()
    .build();
```


### DataOciOpsiOpsiConfigurationConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadata;

DataOciOpsiOpsiConfigurationConfigItemsMetadata.builder()
    .build();
```


### DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails;

DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails.builder()
    .build();
```


### DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails;

DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationConfigItemsList <a name="DataOciOpsiOpsiConfigurationConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsList;

new DataOciOpsiOpsiConfigurationConfigItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails">unitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails">valueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `unitDetails`<sup>Required</sup> <a name="unitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList getUnitDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a>

---

##### `valueInputDetails`<sup>Required</sup> <a name="valueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList getValueInputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowedValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValueType`<sup>Required</sup> <a name="allowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```java
public java.lang.String getAllowedValueType();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference;

new DataOciOpsiOpsiConfigurationConfigItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts">applicableContexts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems">DataOciOpsiOpsiConfigurationConfigItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicableContexts`<sup>Required</sup> <a name="applicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts"></a>

```java
public java.util.List<java.lang.String> getApplicableContexts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.metadata"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItemsMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems">DataOciOpsiOpsiConfigurationConfigItems</a>

---



