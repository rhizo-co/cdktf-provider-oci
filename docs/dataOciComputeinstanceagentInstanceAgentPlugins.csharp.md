# `dataOciComputeinstanceagentInstanceAgentPlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAgentPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAgentPlugins <a name="DataOciComputeinstanceagentInstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins oci_computeinstanceagent_instance_agent_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPlugins(Construct Scope, string Id, DataOciComputeinstanceagentInstanceAgentPluginsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig">DataOciComputeinstanceagentInstanceAgentPluginsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig">DataOciComputeinstanceagentInstanceAgentPluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAgentPlugins.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAgentPlugins.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAgentPlugins.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeinstanceagentInstanceAgentPlugins.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugins resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAgentPlugins to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeinstanceagentInstanceAgentPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAgentPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList">DataOciComputeinstanceagentInstanceAgentPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceAgentPlugins">InstanceAgentPlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentIdInput">InstanceagentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentId">InstanceagentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filter"></a>

```csharp
public DataOciComputeinstanceagentInstanceAgentPluginsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList">DataOciComputeinstanceagentInstanceAgentPluginsFilterList</a>

---

##### `InstanceAgentPlugins`<sup>Required</sup> <a name="InstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceAgentPlugins"></a>

```csharp
public DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList InstanceAgentPlugins { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceagentIdInput`<sup>Optional</sup> <a name="InstanceagentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentIdInput"></a>

```csharp
public string InstanceagentIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceagentId`<sup>Required</sup> <a name="InstanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentId"></a>

```csharp
public string InstanceagentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAgentPluginsConfig <a name="DataOciComputeinstanceagentInstanceAgentPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string InstanceagentId,
    object Filter = null,
    string Id = null,
    string Name = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.instanceagentId">InstanceagentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}.

---

##### `InstanceagentId`<sup>Required</sup> <a name="InstanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.instanceagentId"></a>

```csharp
public string InstanceagentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#filter DataOciComputeinstanceagentInstanceAgentPlugins#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}.

---

### DataOciComputeinstanceagentInstanceAgentPluginsFilter <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#values DataOciComputeinstanceagentInstanceAgentPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#regex DataOciComputeinstanceagentInstanceAgentPlugins#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#values DataOciComputeinstanceagentInstanceAgentPlugins#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#regex DataOciComputeinstanceagentInstanceAgentPlugins#regex}.

---

### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAgentPluginsFilterList <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get"></a>

```csharp
private DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get"></a>

```csharp
private DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.timeLastUpdatedUtc">TimeLastUpdatedUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeLastUpdatedUtc`<sup>Required</sup> <a name="TimeLastUpdatedUtc" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.timeLastUpdatedUtc"></a>

```csharp
public string TimeLastUpdatedUtc { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins</a>

---



