# `dataOciServiceCatalogServiceCatalogs` Submodule <a name="`dataOciServiceCatalogServiceCatalogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalogs <a name="DataOciServiceCatalogServiceCatalogs" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs oci_service_catalog_service_catalogs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogs(Construct Scope, string Id, DataOciServiceCatalogServiceCatalogsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig">DataOciServiceCatalogServiceCatalogsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig">DataOciServiceCatalogServiceCatalogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetServiceCatalogId">ResetServiceCatalogId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServiceCatalogId` <a name="ResetServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.resetServiceCatalogId"></a>

```csharp
private void ResetServiceCatalogId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogServiceCatalogs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogServiceCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList">DataOciServiceCatalogServiceCatalogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.serviceCatalogCollection">ServiceCatalogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList">DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.serviceCatalogIdInput">ServiceCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.serviceCatalogId">ServiceCatalogId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.filter"></a>

```csharp
public DataOciServiceCatalogServiceCatalogsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList">DataOciServiceCatalogServiceCatalogsFilterList</a>

---

##### `ServiceCatalogCollection`<sup>Required</sup> <a name="ServiceCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.serviceCatalogCollection"></a>

```csharp
public DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList ServiceCatalogCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList">DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceCatalogIdInput`<sup>Optional</sup> <a name="ServiceCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.serviceCatalogIdInput"></a>

```csharp
public string ServiceCatalogIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceCatalogId`<sup>Required</sup> <a name="ServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.serviceCatalogId"></a>

```csharp
public string ServiceCatalogId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogsConfig <a name="DataOciServiceCatalogServiceCatalogsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsConfig {
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
    string ServiceCatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#compartment_id DataOciServiceCatalogServiceCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#display_name DataOciServiceCatalogServiceCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#id DataOciServiceCatalogServiceCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.serviceCatalogId">ServiceCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#service_catalog_id DataOciServiceCatalogServiceCatalogs#service_catalog_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#compartment_id DataOciServiceCatalogServiceCatalogs#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#display_name DataOciServiceCatalogServiceCatalogs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#filter DataOciServiceCatalogServiceCatalogs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#id DataOciServiceCatalogServiceCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceCatalogId`<sup>Optional</sup> <a name="ServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsConfig.property.serviceCatalogId"></a>

```csharp
public string ServiceCatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#service_catalog_id DataOciServiceCatalogServiceCatalogs#service_catalog_id}.

---

### DataOciServiceCatalogServiceCatalogsFilter <a name="DataOciServiceCatalogServiceCatalogsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#name DataOciServiceCatalogServiceCatalogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#values DataOciServiceCatalogServiceCatalogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#regex DataOciServiceCatalogServiceCatalogs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#name DataOciServiceCatalogServiceCatalogs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#values DataOciServiceCatalogServiceCatalogs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalogs#regex DataOciServiceCatalogServiceCatalogs#regex}.

---

### DataOciServiceCatalogServiceCatalogsServiceCatalogCollection <a name="DataOciServiceCatalogServiceCatalogsServiceCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsServiceCatalogCollection {

};
```


### DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems <a name="DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogServiceCatalogsFilterList <a name="DataOciServiceCatalogServiceCatalogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.get"></a>

```csharp
private DataOciServiceCatalogServiceCatalogsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceCatalogServiceCatalogsFilterOutputReference <a name="DataOciServiceCatalogServiceCatalogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList <a name="DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.get"></a>

```csharp
private DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference <a name="DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems">DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems">DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItems</a>

---


### DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList <a name="DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.get"></a>

```csharp
private DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference <a name="DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList">DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollection">DataOciServiceCatalogServiceCatalogsServiceCatalogCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList">DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogServiceCatalogsServiceCatalogCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogs.DataOciServiceCatalogServiceCatalogsServiceCatalogCollection">DataOciServiceCatalogServiceCatalogsServiceCatalogCollection</a>

---



