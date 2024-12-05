# `dataOciApmTracesQueryQuickPicks` Submodule <a name="`dataOciApmTracesQueryQuickPicks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesQueryQuickPicks <a name="DataOciApmTracesQueryQuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks oci_apm_traces_query_quick_picks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicks(Construct Scope, string Id, DataOciApmTracesQueryQuickPicksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig">DataOciApmTracesQueryQuickPicksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig">DataOciApmTracesQueryQuickPicksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesQueryQuickPicks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesQueryQuickPicks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesQueryQuickPicks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesQueryQuickPicks.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmTracesQueryQuickPicks.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmTracesQueryQuickPicks resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesQueryQuickPicks to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesQueryQuickPicks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesQueryQuickPicks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList">DataOciApmTracesQueryQuickPicksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.quickPicks">QuickPicks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList">DataOciApmTracesQueryQuickPicksQuickPicksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filter"></a>

```csharp
public DataOciApmTracesQueryQuickPicksFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList">DataOciApmTracesQueryQuickPicksFilterList</a>

---

##### `QuickPicks`<sup>Required</sup> <a name="QuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.quickPicks"></a>

```csharp
public DataOciApmTracesQueryQuickPicksQuickPicksList QuickPicks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList">DataOciApmTracesQueryQuickPicksQuickPicksList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesQueryQuickPicksConfig <a name="DataOciApmTracesQueryQuickPicksConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApmDomainId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#filter DataOciApmTracesQueryQuickPicks#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciApmTracesQueryQuickPicksFilter <a name="DataOciApmTracesQueryQuickPicksFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#name DataOciApmTracesQueryQuickPicks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#values DataOciApmTracesQueryQuickPicks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#regex DataOciApmTracesQueryQuickPicks#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#name DataOciApmTracesQueryQuickPicks#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#values DataOciApmTracesQueryQuickPicks#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#regex DataOciApmTracesQueryQuickPicks#regex}.

---

### DataOciApmTracesQueryQuickPicksQuickPicks <a name="DataOciApmTracesQueryQuickPicksQuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksQuickPicks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesQueryQuickPicksFilterList <a name="DataOciApmTracesQueryQuickPicksFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get"></a>

```csharp
private DataOciApmTracesQueryQuickPicksFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmTracesQueryQuickPicksFilterOutputReference <a name="DataOciApmTracesQueryQuickPicksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmTracesQueryQuickPicksQuickPicksList <a name="DataOciApmTracesQueryQuickPicksQuickPicksList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksQuickPicksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get"></a>

```csharp
private DataOciApmTracesQueryQuickPicksQuickPicksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmTracesQueryQuickPicksQuickPicksOutputReference <a name="DataOciApmTracesQueryQuickPicksQuickPicksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmTracesQueryQuickPicksQuickPicksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickName">QuickPickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickQuery">QuickPickQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks">DataOciApmTracesQueryQuickPicksQuickPicks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QuickPickName`<sup>Required</sup> <a name="QuickPickName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickName"></a>

```csharp
public string QuickPickName { get; }
```

- *Type:* string

---

##### `QuickPickQuery`<sup>Required</sup> <a name="QuickPickQuery" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickQuery"></a>

```csharp
public string QuickPickQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.internalValue"></a>

```csharp
public DataOciApmTracesQueryQuickPicksQuickPicks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks">DataOciApmTracesQueryQuickPicksQuickPicks</a>

---



