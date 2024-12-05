# `dataOciAutoscalingAutoScalingConfigurations` Submodule <a name="`dataOciAutoscalingAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations oci_autoscaling_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurations(Construct Scope, string Id, DataOciAutoscalingAutoScalingConfigurationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig">DataOciAutoscalingAutoScalingConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig">DataOciAutoscalingAutoScalingConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAutoscalingAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations">AutoScalingConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoScalingConfigurations`<sup>Required</sup> <a name="AutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList AutoScalingConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric {

};
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold {

};
```


### DataOciAutoscalingAutoScalingConfigurationsConfig <a name="DataOciAutoscalingAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsConfig {
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
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#filter DataOciAutoscalingAutoScalingConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAutoscalingAutoScalingConfigurationsFilter <a name="DataOciAutoscalingAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources">AutoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds">CoolDownInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount">MaxResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount">MinResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies">Policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingResources`<sup>Required</sup> <a name="AutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList AutoScalingResources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CoolDownInSeconds`<sup>Required</sup> <a name="CoolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds"></a>

```csharp
public double CoolDownInSeconds { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxResourceCount`<sup>Required</sup> <a name="MaxResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount"></a>

```csharp
public double MaxResourceCount { get; }
```

- *Type:* double

---

##### `MinResourceCount`<sup>Required</sup> <a name="MinResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount"></a>

```csharp
public double MinResourceCount { get; }
```

- *Type:* double

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList Policies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial">Initial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Initial`<sup>Required</sup> <a name="Initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial"></a>

```csharp
public double Initial { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity">Capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule">ExecutionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction">ResourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList Capacity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionSchedule`<sup>Required</sup> <a name="ExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList ExecutionSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList ResourceAction { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action">Action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList Action { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a>

---


### DataOciAutoscalingAutoScalingConfigurationsFilterList <a name="DataOciAutoscalingAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



