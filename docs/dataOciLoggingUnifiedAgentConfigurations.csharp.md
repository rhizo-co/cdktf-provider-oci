# `dataOciLoggingUnifiedAgentConfigurations` Submodule <a name="`dataOciLoggingUnifiedAgentConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoggingUnifiedAgentConfigurations <a name="DataOciLoggingUnifiedAgentConfigurations" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations oci_logging_unified_agent_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurations(Construct Scope, string Id, DataOciLoggingUnifiedAgentConfigurationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig">DataOciLoggingUnifiedAgentConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig">DataOciLoggingUnifiedAgentConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId">ResetLogId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupId` <a name="ResetGroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree"></a>

```csharp
private void ResetIsCompartmentIdInSubtree()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId"></a>

```csharp
private void ResetLogId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoggingUnifiedAgentConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoggingUnifiedAgentConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoggingUnifiedAgentConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoggingUnifiedAgentConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoggingUnifiedAgentConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoggingUnifiedAgentConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoggingUnifiedAgentConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection">UnifiedAgentConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput">LogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter"></a>

```csharp
public DataOciLoggingUnifiedAgentConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a>

---

##### `UnifiedAgentConfigurationCollection`<sup>Required</sup> <a name="UnifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection"></a>

```csharp
public DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList UnifiedAgentConfigurationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput"></a>

```csharp
public object IsCompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput"></a>

```csharp
public string LogIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoggingUnifiedAgentConfigurationsConfig <a name="DataOciLoggingUnifiedAgentConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsConfig {
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
    string GroupId = null,
    string Id = null,
    object IsCompartmentIdInSubtree = null,
    string LogId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId">LogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#filter DataOciLoggingUnifiedAgentConfigurations#filter}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId"></a>

```csharp
public string LogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}.

---

### DataOciLoggingUnifiedAgentConfigurationsFilter <a name="DataOciLoggingUnifiedAgentConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}.

---

### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection {

};
```


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoggingUnifiedAgentConfigurationsFilterList <a name="DataOciLoggingUnifiedAgentConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get"></a>

```csharp
private DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get"></a>

```csharp
private DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState">ConfigurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType">ConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified">TimeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState"></a>

```csharp
public string ConfigurationState { get; }
```

- *Type:* string

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType"></a>

```csharp
public string ConfigurationType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified"></a>

```csharp
public string TimeLastModified { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a>

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get"></a>

```csharp
private DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items"></a>

```csharp
public DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a>

---



