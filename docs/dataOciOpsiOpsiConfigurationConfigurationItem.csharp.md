# `dataOciOpsiOpsiConfigurationConfigurationItem` Submodule <a name="`dataOciOpsiOpsiConfigurationConfigurationItem` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItem <a name="DataOciOpsiOpsiConfigurationConfigurationItem" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item oci_opsi_opsi_configuration_configuration_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItem(Construct Scope, string Id, DataOciOpsiOpsiConfigurationConfigurationItemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig">DataOciOpsiOpsiConfigurationConfigurationItemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig">DataOciOpsiOpsiConfigurationConfigurationItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField">ResetConfigItemField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext">ResetConfigItemsApplicableContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetConfigItemField` <a name="ResetConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField"></a>

```csharp
private void ResetConfigItemField()
```

##### `ResetConfigItemsApplicableContext` <a name="ResetConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext"></a>

```csharp
private void ResetConfigItemsApplicableContext()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurationConfigurationItem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurationConfigurationItem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurationConfigurationItem.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurationConfigurationItem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOpsiConfigurationConfigurationItem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOpsiConfigurationConfigurationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurationConfigurationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems">ConfigItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput">ConfigItemFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput">ConfigItemsApplicableContextInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput">OpsiConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField">ConfigItemField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType">OpsiConfigType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ConfigItems`<sup>Required</sup> <a name="ConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList ConfigItems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigItemFieldInput`<sup>Optional</sup> <a name="ConfigItemFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput"></a>

```csharp
public string[] ConfigItemFieldInput { get; }
```

- *Type:* string[]

---

##### `ConfigItemsApplicableContextInput`<sup>Optional</sup> <a name="ConfigItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput"></a>

```csharp
public string[] ConfigItemsApplicableContextInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpsiConfigTypeInput`<sup>Optional</sup> <a name="OpsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput"></a>

```csharp
public string OpsiConfigTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigItemField`<sup>Required</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField"></a>

```csharp
public string[] ConfigItemField { get; }
```

- *Type:* string[]

---

##### `ConfigItemsApplicableContext`<sup>Required</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext"></a>

```csharp
public string[] ConfigItemsApplicableContext { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType"></a>

```csharp
public string OpsiConfigType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfig <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OpsiConfigType,
    string CompartmentId = null,
    string[] ConfigItemField = null,
    string[] ConfigItemsApplicableContext = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType">OpsiConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField">ConfigItemField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType"></a>

```csharp
public string OpsiConfigType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}.

---

##### `ConfigItemField`<sup>Optional</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField"></a>

```csharp
public string[] ConfigItemField { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}.

---

##### `ConfigItemsApplicableContext`<sup>Optional</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext"></a>

```csharp
public string[] ConfigItemsApplicableContext { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}.

---

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItems <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItems {

};
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata {

};
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails {

};
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType">ConfigItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails">UnitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails">ValueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType"></a>

```csharp
public string ConfigItemType { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `UnitDetails`<sup>Required</sup> <a name="UnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList UnitDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a>

---

##### `ValueInputDetails`<sup>Required</sup> <a name="ValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList ValueInputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">AllowedValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValueType`<sup>Required</sup> <a name="AllowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```csharp
public string AllowedValueType { get; }
```

- *Type:* string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts">ApplicableContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType">ConfigItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig">ValueSourceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicableContexts`<sup>Required</sup> <a name="ApplicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts"></a>

```csharp
public string[] ApplicableContexts { get; }
```

- *Type:* string[]

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType"></a>

```csharp
public string ConfigItemType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueSourceConfig`<sup>Required</sup> <a name="ValueSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig"></a>

```csharp
public string ValueSourceConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a>

---



