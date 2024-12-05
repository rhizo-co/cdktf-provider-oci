# `dataOciServiceCatalogServiceCatalogAssociations` Submodule <a name="`dataOciServiceCatalogServiceCatalogAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalogAssociations <a name="DataOciServiceCatalogServiceCatalogAssociations" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations oci_service_catalog_service_catalog_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociations(Construct Scope, string Id, DataOciServiceCatalogServiceCatalogAssociationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig">DataOciServiceCatalogServiceCatalogAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig">DataOciServiceCatalogServiceCatalogAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityType">ResetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogAssociationId">ResetServiceCatalogAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogId">ResetServiceCatalogId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetEntityId` <a name="ResetEntityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityId"></a>

```csharp
private void ResetEntityId()
```

##### `ResetEntityType` <a name="ResetEntityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityType"></a>

```csharp
private void ResetEntityType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServiceCatalogAssociationId` <a name="ResetServiceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogAssociationId"></a>

```csharp
private void ResetServiceCatalogAssociationId()
```

##### `ResetServiceCatalogId` <a name="ResetServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogId"></a>

```csharp
private void ResetServiceCatalogId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogServiceCatalogAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList">DataOciServiceCatalogServiceCatalogAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationCollection">ServiceCatalogAssociationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationIdInput">ServiceCatalogAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogIdInput">ServiceCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationId">ServiceCatalogAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogId">ServiceCatalogId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filter"></a>

```csharp
public DataOciServiceCatalogServiceCatalogAssociationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList">DataOciServiceCatalogServiceCatalogAssociationsFilterList</a>

---

##### `ServiceCatalogAssociationCollection`<sup>Required</sup> <a name="ServiceCatalogAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationCollection"></a>

```csharp
public DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList ServiceCatalogAssociationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList</a>

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceCatalogAssociationIdInput`<sup>Optional</sup> <a name="ServiceCatalogAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationIdInput"></a>

```csharp
public string ServiceCatalogAssociationIdInput { get; }
```

- *Type:* string

---

##### `ServiceCatalogIdInput`<sup>Optional</sup> <a name="ServiceCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogIdInput"></a>

```csharp
public string ServiceCatalogIdInput { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceCatalogAssociationId`<sup>Required</sup> <a name="ServiceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationId"></a>

```csharp
public string ServiceCatalogAssociationId { get; }
```

- *Type:* string

---

##### `ServiceCatalogId`<sup>Required</sup> <a name="ServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogId"></a>

```csharp
public string ServiceCatalogId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogAssociationsConfig <a name="DataOciServiceCatalogServiceCatalogAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EntityId = null,
    string EntityType = null,
    object Filter = null,
    string Id = null,
    string ServiceCatalogAssociationId = null,
    string ServiceCatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogAssociationId">ServiceCatalogAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogId">ServiceCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}.

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#filter DataOciServiceCatalogServiceCatalogAssociations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceCatalogAssociationId`<sup>Optional</sup> <a name="ServiceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogAssociationId"></a>

```csharp
public string ServiceCatalogAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}.

---

##### `ServiceCatalogId`<sup>Optional</sup> <a name="ServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogId"></a>

```csharp
public string ServiceCatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}.

---

### DataOciServiceCatalogServiceCatalogAssociationsFilter <a name="DataOciServiceCatalogServiceCatalogAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}.

---

### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection {

};
```


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogServiceCatalogAssociationsFilterList <a name="DataOciServiceCatalogServiceCatalogAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get"></a>

```csharp
private DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get"></a>

```csharp
private DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.serviceCatalogId">ServiceCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceCatalogId`<sup>Required</sup> <a name="ServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.serviceCatalogId"></a>

```csharp
public string ServiceCatalogId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems</a>

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get"></a>

```csharp
private DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection</a>

---



