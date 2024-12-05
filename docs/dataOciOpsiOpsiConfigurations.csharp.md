# `dataOciOpsiOpsiConfigurations` Submodule <a name="`dataOciOpsiOpsiConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurations <a name="DataOciOpsiOpsiConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations oci_opsi_opsi_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurations(Construct Scope, string Id, DataOciOpsiOpsiConfigurationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig">DataOciOpsiOpsiConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig">DataOciOpsiOpsiConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType">ResetOpsiConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpsiConfigType` <a name="ResetOpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType"></a>

```csharp
private void ResetOpsiConfigType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiOpsiConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOpsiConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOpsiConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection">OpsiConfigurationsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput">OpsiConfigTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput">StateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType">OpsiConfigType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state">State</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter"></a>

```csharp
public DataOciOpsiOpsiConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a>

---

##### `OpsiConfigurationsCollection`<sup>Required</sup> <a name="OpsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList OpsiConfigurationsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OpsiConfigTypeInput`<sup>Optional</sup> <a name="OpsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput"></a>

```csharp
public string[] OpsiConfigTypeInput { get; }
```

- *Type:* string[]

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput"></a>

```csharp
public string[] StateInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType"></a>

```csharp
public string[] OpsiConfigType { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state"></a>

```csharp
public string[] State { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationsConfig <a name="DataOciOpsiOpsiConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string[] OpsiConfigType = null,
    string[] State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType">OpsiConfigType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state">State</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#filter DataOciOpsiOpsiConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpsiConfigType`<sup>Optional</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType"></a>

```csharp
public string[] OpsiConfigType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state"></a>

```csharp
public string[] State { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}.

---

### DataOciOpsiOpsiConfigurationsFilter <a name="DataOciOpsiOpsiConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}.

---

### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection {

};
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems {

};
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems {

};
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata {

};
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails {

};
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationsFilterList <a name="DataOciOpsiOpsiConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOpsiOpsiConfigurationsFilterOutputReference <a name="DataOciOpsiOpsiConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType">ConfigItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails">UnitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails">ValueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType"></a>

```csharp
public string ConfigItemType { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `UnitDetails`<sup>Required</sup> <a name="UnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList UnitDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a>

---

##### `ValueInputDetails`<sup>Required</sup> <a name="ValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList ValueInputDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">AllowedValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValueType`<sup>Required</sup> <a name="AllowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```csharp
public string AllowedValueType { get; }
```

- *Type:* string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```csharp
public string[] PossibleValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts">ApplicableContexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType">ConfigItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicableContexts`<sup>Required</sup> <a name="ApplicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts"></a>

```csharp
public string[] ApplicableContexts { get; }
```

- *Type:* string[]

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType"></a>

```csharp
public string ConfigItemType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus">ConfigItemCustomStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField">ConfigItemField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems">ConfigItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField">OpsiConfigField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType">OpsiConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigItemCustomStatus`<sup>Required</sup> <a name="ConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus"></a>

```csharp
public string[] ConfigItemCustomStatus { get; }
```

- *Type:* string[]

---

##### `ConfigItemField`<sup>Required</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField"></a>

```csharp
public string[] ConfigItemField { get; }
```

- *Type:* string[]

---

##### `ConfigItems`<sup>Required</sup> <a name="ConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList ConfigItems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a>

---

##### `ConfigItemsApplicableContext`<sup>Required</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext"></a>

```csharp
public string[] ConfigItemsApplicableContext { get; }
```

- *Type:* string[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpsiConfigField`<sup>Required</sup> <a name="OpsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField"></a>

```csharp
public string[] OpsiConfigField { get; }
```

- *Type:* string[]

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType"></a>

```csharp
public string OpsiConfigType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get"></a>

```csharp
private DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a>

---



