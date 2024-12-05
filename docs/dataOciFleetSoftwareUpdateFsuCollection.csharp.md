# `dataOciFleetSoftwareUpdateFsuCollection` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCollection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCollection <a name="DataOciFleetSoftwareUpdateFsuCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection oci_fleet_software_update_fsu_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollection(Construct Scope, string Id, DataOciFleetSoftwareUpdateFsuCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig">DataOciFleetSoftwareUpdateFsuCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig">DataOciFleetSoftwareUpdateFsuCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetSoftwareUpdateFsuCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.activeFsuCycle">ActiveFsuCycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fleetDiscovery">FleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.sourceMajorVersion">SourceMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.targetCount">TargetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionIdInput">FsuCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActiveFsuCycle`<sup>Required</sup> <a name="ActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.activeFsuCycle"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList ActiveFsuCycle { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FleetDiscovery`<sup>Required</sup> <a name="FleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fleetDiscovery"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList FleetDiscovery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `SourceMajorVersion`<sup>Required</sup> <a name="SourceMajorVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.sourceMajorVersion"></a>

```csharp
public string SourceMajorVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetCount`<sup>Required</sup> <a name="TargetCount" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.targetCount"></a>

```csharp
public double TargetCount { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `FsuCollectionIdInput`<sup>Optional</sup> <a name="FsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionIdInput"></a>

```csharp
public string FsuCollectionIdInput { get; }
```

- *Type:* string

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle <a name="DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionConfig <a name="DataOciFleetSoftwareUpdateFsuCollectionConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FsuCollectionId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection#fsu_collection_id DataOciFleetSoftwareUpdateFsuCollection#fsu_collection_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionConfig.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_collection#fsu_collection_id DataOciFleetSoftwareUpdateFsuCollection#fsu_collection_id}.

---

### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters {

};
```


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList <a name="DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle">DataOciFleetSoftwareUpdateFsuCollectionActiveFsuCycle</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions">Versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions"></a>

```csharp
public string[] Versions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference <a name="DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId">FsuDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a>

---

##### `FsuDiscoveryId`<sup>Required</sup> <a name="FsuDiscoveryId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```csharp
public string FsuDiscoveryId { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCollection.DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery">DataOciFleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---



