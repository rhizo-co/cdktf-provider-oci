# `dataOciIntegrationIntegrationInstances` Submodule <a name="`dataOciIntegrationIntegrationInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIntegrationIntegrationInstances <a name="DataOciIntegrationIntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances oci_integration_integration_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstances(Construct Scope, string Id, DataOciIntegrationIntegrationInstancesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig">DataOciIntegrationIntegrationInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig">DataOciIntegrationIntegrationInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIntegrationIntegrationInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIntegrationIntegrationInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIntegrationIntegrationInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIntegrationIntegrationInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIntegrationIntegrationInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIntegrationIntegrationInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIntegrationIntegrationInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIntegrationIntegrationInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList">DataOciIntegrationIntegrationInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.integrationInstances">IntegrationInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList">DataOciIntegrationIntegrationInstancesIntegrationInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filter"></a>

```csharp
public DataOciIntegrationIntegrationInstancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList">DataOciIntegrationIntegrationInstancesFilterList</a>

---

##### `IntegrationInstances`<sup>Required</sup> <a name="IntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.integrationInstances"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesList IntegrationInstances { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList">DataOciIntegrationIntegrationInstancesIntegrationInstancesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIntegrationIntegrationInstancesConfig <a name="DataOciIntegrationIntegrationInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesConfig {
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
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#compartment_id DataOciIntegrationIntegrationInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#display_name DataOciIntegrationIntegrationInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#filter DataOciIntegrationIntegrationInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#id DataOciIntegrationIntegrationInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#state DataOciIntegrationIntegrationInstances#state}.

---

### DataOciIntegrationIntegrationInstancesFilter <a name="DataOciIntegrationIntegrationInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#name DataOciIntegrationIntegrationInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#values DataOciIntegrationIntegrationInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/integration_integration_instances#regex DataOciIntegrationIntegrationInstances#regex}.

---

### DataOciIntegrationIntegrationInstancesIntegrationInstances <a name="DataOciIntegrationIntegrationInstancesIntegrationInstances" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstances {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns {

};
```


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIntegrationIntegrationInstancesFilterList <a name="DataOciIntegrationIntegrationInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciIntegrationIntegrationInstancesFilterOutputReference <a name="DataOciIntegrationIntegrationInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsType">DnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsZoneName">DnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.managedType">ManagedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `DnsType`<sup>Required</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```csharp
public string DnsType { get; }
```

- *Type:* string

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```csharp
public string DnsZoneName { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `ManagedType`<sup>Required</sup> <a name="ManagedType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.managedType"></a>

```csharp
public string ManagedType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpoints</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.isImplicit">IsImplicit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetInstanceUrl">TargetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetRole">TargetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetServiceType">TargetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.isImplicit"></a>

```csharp
public IResolvable IsImplicit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetInstanceUrl`<sup>Required</sup> <a name="TargetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetInstanceUrl"></a>

```csharp
public string TargetInstanceUrl { get; }
```

- *Type:* string

---

##### `TargetRole`<sup>Required</sup> <a name="TargetRole" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetRole"></a>

```csharp
public string TargetRole { get; }
```

- *Type:* string

---

##### `TargetServiceType`<sup>Required</sup> <a name="TargetServiceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.targetServiceType"></a>

```csharp
public string TargetServiceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachments</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsType">DnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsZoneName">DnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.managedType">ManagedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `DnsType`<sup>Required</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsType"></a>

```csharp
public string DnsType { get; }
```

- *Type:* string

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.dnsZoneName"></a>

```csharp
public string DnsZoneName { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `ManagedType`<sup>Required</sup> <a name="ManagedType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.managedType"></a>

```csharp
public string ManagedType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpoint</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">TimeRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `TimeRoleChanged`<sup>Required</sup> <a name="TimeRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```csharp
public string TimeRoleChanged { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">CrossRegionIntegrationInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">RegionalInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossRegionIntegrationInstanceDetails`<sup>Required</sup> <a name="CrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList CrossRegionIntegrationInstanceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `RegionalInstanceUrl`<sup>Required</sup> <a name="RegionalInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```csharp
public string RegionalInstanceUrl { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppDisplayName">IdcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppId">IdcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppLocationUrl">IdcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppName">IdcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">InstancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdcsAppDisplayName`<sup>Required</sup> <a name="IdcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```csharp
public string IdcsAppDisplayName { get; }
```

- *Type:* string

---

##### `IdcsAppId`<sup>Required</sup> <a name="IdcsAppId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppId"></a>

```csharp
public string IdcsAppId { get; }
```

- *Type:* string

---

##### `IdcsAppLocationUrl`<sup>Required</sup> <a name="IdcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```csharp
public string IdcsAppLocationUrl { get; }
```

- *Type:* string

---

##### `IdcsAppName`<sup>Required</sup> <a name="IdcsAppName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.idcsAppName"></a>

```csharp
public string IdcsAppName { get; }
```

- *Type:* string

---

##### `InstancePrimaryAudienceUrl`<sup>Required</sup> <a name="InstancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```csharp
public string InstancePrimaryAudienceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfo</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">AllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowlistedIps`<sup>Required</sup> <a name="AllowlistedIps" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```csharp
public string[] AllowlistedIps { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">AllowlistedHttpIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">AllowlistedHttpVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">IsIntegrationVcnAllowlisted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType">NetworkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowlistedHttpIps`<sup>Required</sup> <a name="AllowlistedHttpIps" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```csharp
public string[] AllowlistedHttpIps { get; }
```

- *Type:* string[]

---

##### `AllowlistedHttpVcns`<sup>Required</sup> <a name="AllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList AllowlistedHttpVcns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `IsIntegrationVcnAllowlisted`<sup>Required</sup> <a name="IsIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```csharp
public IResolvable IsIntegrationVcnAllowlisted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```csharp
public string NetworkEndpointType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetails</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.attachments">Attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.consumptionModel">ConsumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.dataRetentionPeriod">DataRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.disasterRecoveryDetails">DisasterRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.enableProcessAutomationTrigger">EnableProcessAutomationTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.extendDataRetentionTrigger">ExtendDataRetentionTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.failoverTrigger">FailoverTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsAt">IdcsAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsInfo">IdcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceDesignTimeUrl">InstanceDesignTimeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.integrationInstanceType">IntegrationInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isByol">IsByol</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isDisasterRecoveryEnabled">IsDisasterRecoveryEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isFileServerEnabled">IsFileServerEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.messagePacks">MessagePacks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.networkEndpointDetails">NetworkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.privateEndpointOutboundConnection">PrivateEndpointOutboundConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances">DataOciIntegrationIntegrationInstancesIntegrationInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateCustomEndpoints`<sup>Required</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.alternateCustomEndpoints"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList AlternateCustomEndpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAlternateCustomEndpointsList</a>

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.attachments"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList Attachments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesAttachmentsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConsumptionModel`<sup>Required</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.consumptionModel"></a>

```csharp
public string ConsumptionModel { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.customEndpoint"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList CustomEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList">DataOciIntegrationIntegrationInstancesIntegrationInstancesCustomEndpointList</a>

---

##### `DataRetentionPeriod`<sup>Required</sup> <a name="DataRetentionPeriod" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.dataRetentionPeriod"></a>

```csharp
public string DataRetentionPeriod { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisasterRecoveryDetails`<sup>Required</sup> <a name="DisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.disasterRecoveryDetails"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList DisasterRecoveryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesDisasterRecoveryDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EnableProcessAutomationTrigger`<sup>Required</sup> <a name="EnableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.enableProcessAutomationTrigger"></a>

```csharp
public double EnableProcessAutomationTrigger { get; }
```

- *Type:* double

---

##### `ExtendDataRetentionTrigger`<sup>Required</sup> <a name="ExtendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.extendDataRetentionTrigger"></a>

```csharp
public double ExtendDataRetentionTrigger { get; }
```

- *Type:* double

---

##### `FailoverTrigger`<sup>Required</sup> <a name="FailoverTrigger" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.failoverTrigger"></a>

```csharp
public double FailoverTrigger { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAt`<sup>Required</sup> <a name="IdcsAt" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsAt"></a>

```csharp
public string IdcsAt { get; }
```

- *Type:* string

---

##### `IdcsInfo`<sup>Required</sup> <a name="IdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.idcsInfo"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList IdcsInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList">DataOciIntegrationIntegrationInstancesIntegrationInstancesIdcsInfoList</a>

---

##### `InstanceDesignTimeUrl`<sup>Required</sup> <a name="InstanceDesignTimeUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceDesignTimeUrl"></a>

```csharp
public string InstanceDesignTimeUrl { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `IntegrationInstanceType`<sup>Required</sup> <a name="IntegrationInstanceType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.integrationInstanceType"></a>

```csharp
public string IntegrationInstanceType { get; }
```

- *Type:* string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isByol"></a>

```csharp
public IResolvable IsByol { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDisasterRecoveryEnabled`<sup>Required</sup> <a name="IsDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isDisasterRecoveryEnabled"></a>

```csharp
public IResolvable IsDisasterRecoveryEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsFileServerEnabled`<sup>Required</sup> <a name="IsFileServerEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isFileServerEnabled"></a>

```csharp
public IResolvable IsFileServerEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsVisualBuilderEnabled`<sup>Required</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.isVisualBuilderEnabled"></a>

```csharp
public IResolvable IsVisualBuilderEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MessagePacks`<sup>Required</sup> <a name="MessagePacks" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.messagePacks"></a>

```csharp
public double MessagePacks { get; }
```

- *Type:* double

---

##### `NetworkEndpointDetails`<sup>Required</sup> <a name="NetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.networkEndpointDetails"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList NetworkEndpointDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList">DataOciIntegrationIntegrationInstancesIntegrationInstancesNetworkEndpointDetailsList</a>

---

##### `PrivateEndpointOutboundConnection`<sup>Required</sup> <a name="PrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.privateEndpointOutboundConnection"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList PrivateEndpointOutboundConnection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList</a>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstances InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstances">DataOciIntegrationIntegrationInstancesIntegrationInstances</a>

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get"></a>

```csharp
private DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference <a name="DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">OutboundConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `OutboundConnectionType`<sup>Required</sup> <a name="OutboundConnectionType" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```csharp
public string OutboundConnectionType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```csharp
public DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIntegrationIntegrationInstances.DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection">DataOciIntegrationIntegrationInstancesIntegrationInstancesPrivateEndpointOutboundConnection</a>

---



