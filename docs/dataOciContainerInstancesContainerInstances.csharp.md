# `dataOciContainerInstancesContainerInstances` Submodule <a name="`dataOciContainerInstancesContainerInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstances <a name="DataOciContainerInstancesContainerInstances" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances oci_container_instances_container_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstances(Construct Scope, string Id, DataOciContainerInstancesContainerInstancesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig">DataOciContainerInstancesContainerInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig">DataOciContainerInstancesContainerInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerInstancesContainerInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerInstancesContainerInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerInstancesContainerInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.containerInstanceCollection">ContainerInstanceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList">DataOciContainerInstancesContainerInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ContainerInstanceCollection`<sup>Required</sup> <a name="ContainerInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.containerInstanceCollection"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList ContainerInstanceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.filter"></a>

```csharp
public DataOciContainerInstancesContainerInstancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList">DataOciContainerInstancesContainerInstancesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstancesConfig <a name="DataOciContainerInstancesContainerInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AvailabilityDomain = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#compartment_id DataOciContainerInstancesContainerInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#availability_domain DataOciContainerInstancesContainerInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#display_name DataOciContainerInstancesContainerInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#id DataOciContainerInstancesContainerInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#state DataOciContainerInstancesContainerInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#compartment_id DataOciContainerInstancesContainerInstances#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#availability_domain DataOciContainerInstancesContainerInstances#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#display_name DataOciContainerInstancesContainerInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#filter DataOciContainerInstancesContainerInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#id DataOciContainerInstancesContainerInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#state DataOciContainerInstancesContainerInstances#state}.

---

### DataOciContainerInstancesContainerInstancesContainerInstanceCollection <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollection {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes {

};
```


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs {

};
```


### DataOciContainerInstancesContainerInstancesFilter <a name="DataOciContainerInstancesContainerInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#name DataOciContainerInstancesContainerInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#values DataOciContainerInstancesContainerInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#regex DataOciContainerInstancesContainerInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#name DataOciContainerInstancesContainerInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#values DataOciContainerInstancesContainerInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instances#regex DataOciContainerInstancesContainerInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeaders</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.failureAction">FailureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.initialDelayInSeconds">InitialDelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `FailureAction`<sup>Required</sup> <a name="FailureAction" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.failureAction"></a>

```csharp
public string FailureAction { get; }
```

- *Type:* string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.headers"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList Headers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksHeadersList</a>

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `InitialDelayInSeconds`<sup>Required</sup> <a name="InitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```csharp
public double InitialDelayInSeconds { get; }
```

- *Type:* double

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecks</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.containerInstanceId">ContainerInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.exitCode">ExitCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.imageUrl">ImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.isResourcePrincipalDisabled">IsResourcePrincipalDisabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.securityContext">SecurityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.timeTerminated">TimeTerminated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `ContainerInstanceId`<sup>Required</sup> <a name="ContainerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.containerInstanceId"></a>

```csharp
public string ContainerInstanceId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.exitCode"></a>

```csharp
public double ExitCode { get; }
```

- *Type:* double

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.healthChecks"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList HealthChecks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersHealthChecksList</a>

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.imageUrl"></a>

```csharp
public string ImageUrl { get; }
```

- *Type:* string

---

##### `IsResourcePrincipalDisabled`<sup>Required</sup> <a name="IsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```csharp
public IResolvable IsResourcePrincipalDisabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResourceConfig`<sup>Required</sup> <a name="ResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.resourceConfig"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList ResourceConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList</a>

---

##### `SecurityContext`<sup>Required</sup> <a name="SecurityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.securityContext"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList SecurityContext { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeTerminated`<sup>Required</sup> <a name="TimeTerminated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.timeTerminated"></a>

```csharp
public string TimeTerminated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.volumeMounts"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList</a>

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainers</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.memoryLimitInGbs">MemoryLimitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.vcpusLimit">VcpusLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryLimitInGbs`<sup>Required</sup> <a name="MemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```csharp
public double MemoryLimitInGbs { get; }
```

- *Type:* double

---

##### `VcpusLimit`<sup>Required</sup> <a name="VcpusLimit" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```csharp
public double VcpusLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersResourceConfig</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">AddCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">DropCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddCapabilities`<sup>Required</sup> <a name="AddCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```csharp
public string[] AddCapabilities { get; }
```

- *Type:* string[]

---

##### `DropCapabilities`<sup>Required</sup> <a name="DropCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```csharp
public string[] DropCapabilities { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilities</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">IsNonRootUserCheckEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">IsRootFileSystemReadonly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.runAsGroup">RunAsGroup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.runAsUser">RunAsUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.securityContextType">SecurityContextType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.capabilities"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList Capabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextCapabilitiesList</a>

---

##### `IsNonRootUserCheckEnabled`<sup>Required</sup> <a name="IsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```csharp
public IResolvable IsNonRootUserCheckEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRootFileSystemReadonly`<sup>Required</sup> <a name="IsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```csharp
public IResolvable IsRootFileSystemReadonly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RunAsGroup`<sup>Required</sup> <a name="RunAsGroup" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.runAsGroup"></a>

```csharp
public double RunAsGroup { get; }
```

- *Type:* double

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.runAsUser"></a>

```csharp
public double RunAsUser { get; }
```

- *Type:* double

---

##### `SecurityContextType`<sup>Required</sup> <a name="SecurityContextType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.securityContextType"></a>

```csharp
public string SecurityContextType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContextOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersSecurityContext</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```csharp
public IResolvable IsReadOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.subPath"></a>

```csharp
public string SubPath { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersVolumeMounts</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.nameservers">Nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.searches">Searches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.nameservers"></a>

```csharp
public string[] Nameservers { get; }
```

- *Type:* string[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `Searches`<sup>Required</sup> <a name="Searches" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.searches"></a>

```csharp
public string[] Searches { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfig</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.registryEndpoint">RegistryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RegistryEndpoint`<sup>Required</sup> <a name="RegistryEndpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.registryEndpoint"></a>

```csharp
public string RegistryEndpoint { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecrets</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.containerCount">ContainerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.containerRestartPolicy">ContainerRestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.containers">Containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.dnsConfig">DnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.gracefulShutdownTimeoutInSeconds">GracefulShutdownTimeoutInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.imagePullSecrets">ImagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.vnics">Vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.volumeCount">VolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerCount`<sup>Required</sup> <a name="ContainerCount" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.containerCount"></a>

```csharp
public double ContainerCount { get; }
```

- *Type:* double

---

##### `ContainerRestartPolicy`<sup>Required</sup> <a name="ContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.containerRestartPolicy"></a>

```csharp
public string ContainerRestartPolicy { get; }
```

- *Type:* string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.containers"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList Containers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsContainersList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.dnsConfig"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList DnsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsDnsConfigList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="GracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.gracefulShutdownTimeoutInSeconds"></a>

```csharp
public string GracefulShutdownTimeoutInSeconds { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImagePullSecrets`<sup>Required</sup> <a name="ImagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.imagePullSecrets"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList ImagePullSecrets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsImagePullSecretsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.shapeConfig"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Vnics`<sup>Required</sup> <a name="Vnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.vnics"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList Vnics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList</a>

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.volumeCount"></a>

```csharp
public double VolumeCount { get; }
```

- *Type:* double

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.volumes"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList Volumes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItems</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```csharp
public double NetworkingBandwidthInGbps { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.processorDescription"></a>

```csharp
public string ProcessorDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsShapeConfig</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.isPublicIpAssigned">IsPublicIpAssigned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `IsPublicIpAssigned`<sup>Required</sup> <a name="IsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.isPublicIpAssigned"></a>

```csharp
public IResolvable IsPublicIpAssigned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.skipSourceDestCheck"></a>

```csharp
public IResolvable SkipSourceDestCheck { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnicsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVnics</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigs</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.backingStore">BackingStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.configs">Configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackingStore`<sup>Required</sup> <a name="BackingStore" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.backingStore"></a>

```csharp
public string BackingStore { get; }
```

- *Type:* string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.configs"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList Configs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumesOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsVolumes</a>

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference <a name="DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollection">DataOciContainerInstancesContainerInstancesContainerInstanceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.items"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList">DataOciContainerInstancesContainerInstancesContainerInstanceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerInstancesContainerInstancesContainerInstanceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesContainerInstanceCollection">DataOciContainerInstancesContainerInstancesContainerInstanceCollection</a>

---


### DataOciContainerInstancesContainerInstancesFilterList <a name="DataOciContainerInstancesContainerInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.get"></a>

```csharp
private DataOciContainerInstancesContainerInstancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciContainerInstancesContainerInstancesFilterOutputReference <a name="DataOciContainerInstancesContainerInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerInstancesContainerInstancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstances.DataOciContainerInstancesContainerInstancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



