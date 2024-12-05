# `dataOciOpsiOpsiConfiguration` Submodule <a name="`dataOciOpsiOpsiConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfiguration <a name="DataOciOpsiOpsiConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration oci_opsi_opsi_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfiguration(Construct Scope, string Id, DataOciOpsiOpsiConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig">DataOciOpsiOpsiConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig">DataOciOpsiOpsiConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOpsiConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOpsiConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItems">ConfigItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList">DataOciOpsiOpsiConfigurationConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigType">OpsiConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatusInput">ConfigItemCustomStatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemFieldInput">ConfigItemFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContextInput">ConfigItemsApplicableContextInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigFieldInput">OpsiConfigFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationIdInput">OpsiConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatus">ConfigItemCustomStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemField">ConfigItemField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigField">OpsiConfigField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationId">OpsiConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigItems`<sup>Required</sup> <a name="ConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItems"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsList ConfigItems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList">DataOciOpsiOpsiConfigurationConfigItemsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigType"></a>

```csharp
public string OpsiConfigType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ConfigItemCustomStatusInput`<sup>Optional</sup> <a name="ConfigItemCustomStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatusInput"></a>

```csharp
public string[] ConfigItemCustomStatusInput { get; }
```

- *Type:* string[]

---

##### `ConfigItemFieldInput`<sup>Optional</sup> <a name="ConfigItemFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemFieldInput"></a>

```csharp
public string[] ConfigItemFieldInput { get; }
```

- *Type:* string[]

---

##### `ConfigItemsApplicableContextInput`<sup>Optional</sup> <a name="ConfigItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContextInput"></a>

```csharp
public string[] ConfigItemsApplicableContextInput { get; }
```

- *Type:* string[]

---

##### `OpsiConfigFieldInput`<sup>Optional</sup> <a name="OpsiConfigFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigFieldInput"></a>

```csharp
public string[] OpsiConfigFieldInput { get; }
```

- *Type:* string[]

---

##### `OpsiConfigurationIdInput`<sup>Optional</sup> <a name="OpsiConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationIdInput"></a>

```csharp
public string OpsiConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ConfigItemCustomStatus`<sup>Required</sup> <a name="ConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemCustomStatus"></a>

```csharp
public string[] ConfigItemCustomStatus { get; }
```

- *Type:* string[]

---

##### `ConfigItemField`<sup>Required</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemField"></a>

```csharp
public string[] ConfigItemField { get; }
```

- *Type:* string[]

---

##### `ConfigItemsApplicableContext`<sup>Required</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.configItemsApplicableContext"></a>

```csharp
public string[] ConfigItemsApplicableContext { get; }
```

- *Type:* string[]

---

##### `OpsiConfigField`<sup>Required</sup> <a name="OpsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigField"></a>

```csharp
public string[] OpsiConfigField { get; }
```

- *Type:* string[]

---

##### `OpsiConfigurationId`<sup>Required</sup> <a name="OpsiConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.opsiConfigurationId"></a>

```csharp
public string OpsiConfigurationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationConfig <a name="DataOciOpsiOpsiConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ConfigItemCustomStatus,
    string[] ConfigItemField,
    string[] ConfigItemsApplicableContext,
    string[] OpsiConfigField,
    string OpsiConfigurationId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemCustomStatus">ConfigItemCustomStatus</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemField">ConfigItemField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigField">OpsiConfigField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigurationId">OpsiConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigItemCustomStatus`<sup>Required</sup> <a name="ConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemCustomStatus"></a>

```csharp
public string[] ConfigItemCustomStatus { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}.

---

##### `ConfigItemField`<sup>Required</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemField"></a>

```csharp
public string[] ConfigItemField { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}.

---

##### `ConfigItemsApplicableContext`<sup>Required</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.configItemsApplicableContext"></a>

```csharp
public string[] ConfigItemsApplicableContext { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `OpsiConfigField`<sup>Required</sup> <a name="OpsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigField"></a>

```csharp
public string[] OpsiConfigField { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}.

---

##### `OpsiConfigurationId`<sup>Required</sup> <a name="OpsiConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfig.property.opsiConfigurationId"></a>

```csharp
public string OpsiConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}.

---

### DataOciOpsiOpsiConfigurationConfigItems <a name="DataOciOpsiOpsiConfigurationConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItems {

};
```


### DataOciOpsiOpsiConfigurationConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadata {

};
```


### DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails {

};
```


### DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationConfigItemsList <a name="DataOciOpsiOpsiConfigurationConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType">ConfigItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails">UnitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails">ValueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType"></a>

```csharp
public string ConfigItemType { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `UnitDetails`<sup>Required</sup> <a name="UnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList UnitDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a>

---

##### `ValueInputDetails`<sup>Required</sup> <a name="ValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList ValueInputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">AllowedValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValueType`<sup>Required</sup> <a name="AllowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```csharp
public string AllowedValueType { get; }
```

- *Type:* string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts">ApplicableContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType">ConfigItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems">DataOciOpsiOpsiConfigurationConfigItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicableContexts`<sup>Required</sup> <a name="ApplicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts"></a>

```csharp
public string[] ApplicableContexts { get; }
```

- *Type:* string[]

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType"></a>

```csharp
public string ConfigItemType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.metadata"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItemsMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigItemsMetadataList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfiguration.DataOciOpsiOpsiConfigurationConfigItems">DataOciOpsiOpsiConfigurationConfigItems</a>

---



