# `dataOciBdsAutoScalingConfigurations` Submodule <a name="`dataOciBdsAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsAutoScalingConfigurations <a name="DataOciBdsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations oci_bds_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurations(Construct Scope, string Id, DataOciBdsAutoScalingConfigurationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig">DataOciBdsAutoScalingConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig">DataOciBdsAutoScalingConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsAutoScalingConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsAutoScalingConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsAutoScalingConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsAutoScalingConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBdsAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsAutoScalingConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.autoScalingConfigurations">AutoScalingConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList">DataOciBdsAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoScalingConfigurations`<sup>Required</sup> <a name="AutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList AutoScalingConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filter"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList">DataOciBdsAutoScalingConfigurationsFilterList</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric {

};
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold {

};
```


### DataOciBdsAutoScalingConfigurationsConfig <a name="DataOciBdsAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsInstanceId,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#filter DataOciBdsAutoScalingConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}.

---

### DataOciBdsAutoScalingConfigurationsFilter <a name="DataOciBdsAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#name DataOciBdsAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#values DataOciBdsAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#regex DataOciBdsAutoScalingConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#name DataOciBdsAutoScalingConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#values DataOciBdsAutoScalingConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#regex DataOciBdsAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policy">Policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policyDetails">PolicyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policy"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList Policy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList</a>

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policyDetails"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList PolicyDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleDownConfig">ScaleDownConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleInConfig">ScaleInConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleOutConfig">ScaleOutConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleUpConfig">ScaleUpConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scheduleDetails">ScheduleDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.triggerType">TriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ScaleDownConfig`<sup>Required</sup> <a name="ScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList ScaleDownConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList</a>

---

##### `ScaleInConfig`<sup>Required</sup> <a name="ScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleInConfig"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList ScaleInConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList</a>

---

##### `ScaleOutConfig`<sup>Required</sup> <a name="ScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList ScaleOutConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList</a>

---

##### `ScaleUpConfig`<sup>Required</sup> <a name="ScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList ScaleUpConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList</a>

---

##### `ScheduleDetails`<sup>Required</sup> <a name="ScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scheduleDetails"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList ScheduleDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.triggerType"></a>

```csharp
public string TriggerType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">MemoryStepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">MinMemoryPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">MinOcpusPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">OcpuStepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryStepSize`<sup>Required</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```csharp
public double MemoryStepSize { get; }
```

- *Type:* double

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList</a>

---

##### `MinMemoryPerNode`<sup>Required</sup> <a name="MinMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```csharp
public double MinMemoryPerNode { get; }
```

- *Type:* double

---

##### `MinOcpusPerNode`<sup>Required</sup> <a name="MinOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```csharp
public double MinOcpusPerNode { get; }
```

- *Type:* double

---

##### `OcpuStepSize`<sup>Required</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```csharp
public double OcpuStepSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.stepSize">StepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList</a>

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `StepSize`<sup>Required</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```csharp
public double StepSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.stepSize">StepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList</a>

---

##### `StepSize`<sup>Required</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```csharp
public double StepSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">MaxMemoryPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">MaxOcpusPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">MemoryStepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">OcpuStepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxMemoryPerNode`<sup>Required</sup> <a name="MaxMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```csharp
public double MaxMemoryPerNode { get; }
```

- *Type:* double

---

##### `MaxOcpusPerNode`<sup>Required</sup> <a name="MaxOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```csharp
public double MaxOcpusPerNode { get; }
```

- *Type:* double

---

##### `MemoryStepSize`<sup>Required</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```csharp
public double MemoryStepSize { get; }
```

- *Type:* double

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList</a>

---

##### `OcpuStepSize`<sup>Required</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```csharp
public double OcpuStepSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">ScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">TimeAndHorizontalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">TimeAndVerticalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```csharp
public string ScheduleType { get; }
```

- *Type:* string

---

##### `TimeAndHorizontalScalingConfig`<sup>Required</sup> <a name="TimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList TimeAndHorizontalScalingConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `TimeAndVerticalScalingConfig`<sup>Required</sup> <a name="TimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList TimeAndVerticalScalingConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">TargetNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">TimeRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetNodeCount`<sup>Required</sup> <a name="TargetNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```csharp
public double TargetNodeCount { get; }
```

- *Type:* double

---

##### `TimeRecurrence`<sup>Required</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```csharp
public string TimeRecurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">TargetMemoryPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">TargetOcpusPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">TargetShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">TimeRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetMemoryPerNode`<sup>Required</sup> <a name="TargetMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```csharp
public double TargetMemoryPerNode { get; }
```

- *Type:* double

---

##### `TargetOcpusPerNode`<sup>Required</sup> <a name="TargetOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```csharp
public double TargetOcpusPerNode { get; }
```

- *Type:* double

---

##### `TargetShape`<sup>Required</sup> <a name="TargetShape" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```csharp
public string TargetShape { get; }
```

- *Type:* string

---

##### `TimeRecurrence`<sup>Required</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```csharp
public string TimeRecurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.rules"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.threshold"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.metric"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules</a>

---


### DataOciBdsAutoScalingConfigurationsFilterList <a name="DataOciBdsAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get"></a>

```csharp
private DataOciBdsAutoScalingConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBdsAutoScalingConfigurationsFilterOutputReference <a name="DataOciBdsAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsAutoScalingConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



