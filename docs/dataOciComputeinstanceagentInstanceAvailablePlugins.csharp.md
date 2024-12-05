# `dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins oci_computeinstanceagent_instance_available_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePlugins(Construct Scope, string Id, DataOciComputeinstanceagentInstanceAvailablePluginsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig">DataOciComputeinstanceagentInstanceAvailablePluginsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig">DataOciComputeinstanceagentInstanceAvailablePluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAvailablePlugins.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAvailablePlugins.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAvailablePlugins.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAvailablePlugins.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAvailablePlugins to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeinstanceagentInstanceAvailablePlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAvailablePlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins">AvailablePlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput">OsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput">OsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName">OsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailablePlugins`<sup>Required</sup> <a name="AvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins"></a>

```csharp
public DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList AvailablePlugins { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter"></a>

```csharp
public DataOciComputeinstanceagentInstanceAvailablePluginsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsNameInput`<sup>Optional</sup> <a name="OsNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput"></a>

```csharp
public string OsNameInput { get; }
```

- *Type:* string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput"></a>

```csharp
public string OsVersionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName"></a>

```csharp
public string OsName { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins {

};
```


### DataOciComputeinstanceagentInstanceAvailablePluginsConfig <a name="DataOciComputeinstanceagentInstanceAvailablePluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string OsName,
    string OsVersion,
    object Filter = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName">OsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion">OsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName"></a>

```csharp
public string OsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion"></a>

```csharp
public string OsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

### DataOciComputeinstanceagentInstanceAvailablePluginsFilter <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get"></a>

```csharp
private DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault">IsEnabledByDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported">IsSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledByDefault`<sup>Required</sup> <a name="IsEnabledByDefault" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault"></a>

```csharp
public IResolvable IsEnabledByDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSupported`<sup>Required</sup> <a name="IsSupported" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported"></a>

```csharp
public IResolvable IsSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a>

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get"></a>

```csharp
private DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



