# `dataOciContainerInstancesContainerInstanceShapes` Submodule <a name="`dataOciContainerInstancesContainerInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstanceShapes <a name="DataOciContainerInstancesContainerInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes oci_container_instances_container_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapes(Construct Scope, string Id, DataOciContainerInstancesContainerInstanceShapesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig">DataOciContainerInstancesContainerInstanceShapesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig">DataOciContainerInstancesContainerInstanceShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstanceShapes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstanceShapes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstanceShapes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstanceShapes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerInstancesContainerInstanceShapes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerInstancesContainerInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.containerInstanceShapeCollection">ContainerInstanceShapeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList">DataOciContainerInstancesContainerInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ContainerInstanceShapeCollection`<sup>Required</sup> <a name="ContainerInstanceShapeCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.containerInstanceShapeCollection"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList ContainerInstanceShapeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filter"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList">DataOciContainerInstancesContainerInstanceShapesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceShapesConfig <a name="DataOciContainerInstancesContainerInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#filter DataOciContainerInstancesContainerInstanceShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection {

};
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems {

};
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions {

};
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions {

};
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions {

};
```


### DataOciContainerInstancesContainerInstanceShapesFilter <a name="DataOciContainerInstancesContainerInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#name DataOciContainerInstancesContainerInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#values DataOciContainerInstancesContainerInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#regex DataOciContainerInstancesContainerInstanceShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#name DataOciContainerInstancesContainerInstanceShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#values DataOciContainerInstancesContainerInstanceShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#regex DataOciContainerInstancesContainerInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">DefaultPerOcpuInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxInGbs">MaxInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs">MaxPerOcpuInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minInGbs">MinInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs">MinPerOcpuInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPerOcpuInGbs`<sup>Required</sup> <a name="DefaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```csharp
public double DefaultPerOcpuInGbs { get; }
```

- *Type:* double

---

##### `MaxInGbs`<sup>Required</sup> <a name="MaxInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxInGbs"></a>

```csharp
public double MaxInGbs { get; }
```

- *Type:* double

---

##### `MaxPerOcpuInGbs`<sup>Required</sup> <a name="MaxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```csharp
public double MaxPerOcpuInGbs { get; }
```

- *Type:* double

---

##### `MinInGbs`<sup>Required</sup> <a name="MinInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minInGbs"></a>

```csharp
public double MinInGbs { get; }
```

- *Type:* double

---

##### `MinPerOcpuInGbs`<sup>Required</sup> <a name="MinPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```csharp
public double MinPerOcpuInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">DefaultPerOcpuInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps">MaxInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps">MinInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPerOcpuInGbps`<sup>Required</sup> <a name="DefaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```csharp
public double DefaultPerOcpuInGbps { get; }
```

- *Type:* double

---

##### `MaxInGbps`<sup>Required</sup> <a name="MaxInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```csharp
public double MaxInGbps { get; }
```

- *Type:* double

---

##### `MinInGbps`<sup>Required</sup> <a name="MinInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```csharp
public double MinInGbps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.memoryOptions">MemoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.networkingBandwidthOptions">NetworkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.ocpuOptions">OcpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryOptions`<sup>Required</sup> <a name="MemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.memoryOptions"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList MemoryOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkingBandwidthOptions`<sup>Required</sup> <a name="NetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.networkingBandwidthOptions"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList NetworkingBandwidthOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList</a>

---

##### `OcpuOptions`<sup>Required</sup> <a name="OcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.ocpuOptions"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList OcpuOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList</a>

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.processorDescription"></a>

```csharp
public string ProcessorDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.items"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection</a>

---


### DataOciContainerInstancesContainerInstanceShapesFilterList <a name="DataOciContainerInstancesContainerInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstanceShapesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciContainerInstancesContainerInstanceShapesFilterOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstanceShapesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



