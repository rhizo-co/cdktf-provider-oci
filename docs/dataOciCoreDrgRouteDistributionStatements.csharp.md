# `dataOciCoreDrgRouteDistributionStatements` Submodule <a name="`dataOciCoreDrgRouteDistributionStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements oci_core_drg_route_distribution_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatements(Construct Scope, string Id, DataOciCoreDrgRouteDistributionStatementsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig">DataOciCoreDrgRouteDistributionStatementsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig">DataOciCoreDrgRouteDistributionStatementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDrgRouteDistributionStatements.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDrgRouteDistributionStatements.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDrgRouteDistributionStatements.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreDrgRouteDistributionStatements.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreDrgRouteDistributionStatements resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDrgRouteDistributionStatements to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDrgRouteDistributionStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDrgRouteDistributionStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements">DrgRouteDistributionStatements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput">DrgRouteDistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId">DrgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DrgRouteDistributionStatements`<sup>Required</sup> <a name="DrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionStatements"></a>

```csharp
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList DrgRouteDistributionStatements { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filter"></a>

```csharp
public DataOciCoreDrgRouteDistributionStatementsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList">DataOciCoreDrgRouteDistributionStatementsFilterList</a>

---

##### `DrgRouteDistributionIdInput`<sup>Optional</sup> <a name="DrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionIdInput"></a>

```csharp
public string DrgRouteDistributionIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DrgRouteDistributionId`<sup>Required</sup> <a name="DrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.drgRouteDistributionId"></a>

```csharp
public string DrgRouteDistributionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatements.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDrgRouteDistributionStatementsConfig <a name="DataOciCoreDrgRouteDistributionStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DrgRouteDistributionId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId">DrgRouteDistributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DrgRouteDistributionId`<sup>Required</sup> <a name="DrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.drgRouteDistributionId"></a>

```csharp
public string DrgRouteDistributionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#drg_route_distribution_id DataOciCoreDrgRouteDistributionStatements#drg_route_distribution_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#filter DataOciCoreDrgRouteDistributionStatements#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#id DataOciCoreDrgRouteDistributionStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements {

};
```


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria {

};
```


### DataOciCoreDrgRouteDistributionStatementsFilter <a name="DataOciCoreDrgRouteDistributionStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#name DataOciCoreDrgRouteDistributionStatements#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#values DataOciCoreDrgRouteDistributionStatements#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_drg_route_distribution_statements#regex DataOciCoreDrgRouteDistributionStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get"></a>

```csharp
private DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get"></a>

```csharp
private DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId">DrgAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `DrgAttachmentId`<sup>Required</sup> <a name="DrgAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.drgAttachmentId"></a>

```csharp
public string DrgAttachmentId { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteria</a>

---


### DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria">MatchCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.matchCriteria"></a>

```csharp
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList MatchCriteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsMatchCriteriaList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatementsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements">DataOciCoreDrgRouteDistributionStatementsDrgRouteDistributionStatements</a>

---


### DataOciCoreDrgRouteDistributionStatementsFilterList <a name="DataOciCoreDrgRouteDistributionStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get"></a>

```csharp
private DataOciCoreDrgRouteDistributionStatementsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreDrgRouteDistributionStatementsFilterOutputReference <a name="DataOciCoreDrgRouteDistributionStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreDrgRouteDistributionStatementsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDrgRouteDistributionStatements.DataOciCoreDrgRouteDistributionStatementsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



