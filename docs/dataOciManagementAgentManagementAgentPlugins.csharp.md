# `dataOciManagementAgentManagementAgentPlugins` Submodule <a name="`dataOciManagementAgentManagementAgentPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentPlugins <a name="DataOciManagementAgentManagementAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins oci_management_agent_management_agent_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPlugins(Construct Scope, string Id, DataOciManagementAgentManagementAgentPluginsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig">DataOciManagementAgentManagementAgentPluginsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig">DataOciManagementAgentManagementAgentPluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetPlatformType">ResetPlatformType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAgentId` <a name="ResetAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetAgentId"></a>

```csharp
private void ResetAgentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlatformType` <a name="ResetPlatformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetPlatformType"></a>

```csharp
private void ResetPlatformType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentPlugins.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentPlugins.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentPlugins.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentPlugins.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentPlugins resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentPlugins to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList">DataOciManagementAgentManagementAgentPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.managementAgentPlugins">ManagementAgentPlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList">DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformTypeInput">PlatformTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformType">PlatformType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filter"></a>

```csharp
public DataOciManagementAgentManagementAgentPluginsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList">DataOciManagementAgentManagementAgentPluginsFilterList</a>

---

##### `ManagementAgentPlugins`<sup>Required</sup> <a name="ManagementAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.managementAgentPlugins"></a>

```csharp
public DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList ManagementAgentPlugins { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList">DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlatformTypeInput`<sup>Optional</sup> <a name="PlatformTypeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformTypeInput"></a>

```csharp
public string[] PlatformTypeInput { get; }
```

- *Type:* string[]

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformType"></a>

```csharp
public string[] PlatformType { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentPluginsConfig <a name="DataOciManagementAgentManagementAgentPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AgentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string[] PlatformType = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#compartment_id DataOciManagementAgentManagementAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#agent_id DataOciManagementAgentManagementAgentPlugins#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#display_name DataOciManagementAgentManagementAgentPlugins#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#id DataOciManagementAgentManagementAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.platformType">PlatformType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#platform_type DataOciManagementAgentManagementAgentPlugins#platform_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#state DataOciManagementAgentManagementAgentPlugins#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#compartment_id DataOciManagementAgentManagementAgentPlugins#compartment_id}.

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#agent_id DataOciManagementAgentManagementAgentPlugins#agent_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#display_name DataOciManagementAgentManagementAgentPlugins#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#filter DataOciManagementAgentManagementAgentPlugins#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#id DataOciManagementAgentManagementAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlatformType`<sup>Optional</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.platformType"></a>

```csharp
public string[] PlatformType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#platform_type DataOciManagementAgentManagementAgentPlugins#platform_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#state DataOciManagementAgentManagementAgentPlugins#state}.

---

### DataOciManagementAgentManagementAgentPluginsFilter <a name="DataOciManagementAgentManagementAgentPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#name DataOciManagementAgentManagementAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#values DataOciManagementAgentManagementAgentPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#regex DataOciManagementAgentManagementAgentPlugins#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#name DataOciManagementAgentManagementAgentPlugins#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#values DataOciManagementAgentManagementAgentPlugins#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#regex DataOciManagementAgentManagementAgentPlugins#regex}.

---

### DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins <a name="DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentPluginsFilterList <a name="DataOciManagementAgentManagementAgentPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.get"></a>

```csharp
private DataOciManagementAgentManagementAgentPluginsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciManagementAgentManagementAgentPluginsFilterOutputReference <a name="DataOciManagementAgentManagementAgentPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList <a name="DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.get"></a>

```csharp
private DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference <a name="DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.isConsoleDeployable">IsConsoleDeployable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.supportedPlatformTypes">SupportedPlatformTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins">DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsConsoleDeployable`<sup>Required</sup> <a name="IsConsoleDeployable" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.isConsoleDeployable"></a>

```csharp
public IResolvable IsConsoleDeployable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedPlatformTypes`<sup>Required</sup> <a name="SupportedPlatformTypes" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.supportedPlatformTypes"></a>

```csharp
public string[] SupportedPlatformTypes { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.internalValue"></a>

```csharp
public DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins">DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins</a>

---



