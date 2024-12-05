# `dataOciCoreAppCatalogListingResourceVersions` Submodule <a name="`dataOciCoreAppCatalogListingResourceVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogListingResourceVersions <a name="DataOciCoreAppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions oci_core_app_catalog_listing_resource_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersions(Construct Scope, string Id, DataOciCoreAppCatalogListingResourceVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig">DataOciCoreAppCatalogListingResourceVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig">DataOciCoreAppCatalogListingResourceVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreAppCatalogListingResourceVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreAppCatalogListingResourceVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreAppCatalogListingResourceVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreAppCatalogListingResourceVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreAppCatalogListingResourceVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreAppCatalogListingResourceVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogListingResourceVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.appCatalogListingResourceVersions">AppCatalogListingResourceVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList">DataOciCoreAppCatalogListingResourceVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AppCatalogListingResourceVersions`<sup>Required</sup> <a name="AppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.appCatalogListingResourceVersions"></a>

```csharp
public DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList AppCatalogListingResourceVersions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filter"></a>

```csharp
public DataOciCoreAppCatalogListingResourceVersionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList">DataOciCoreAppCatalogListingResourceVersionsFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions {

};
```


### DataOciCoreAppCatalogListingResourceVersionsConfig <a name="DataOciCoreAppCatalogListingResourceVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ListingId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#filter DataOciCoreAppCatalogListingResourceVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreAppCatalogListingResourceVersionsFilter <a name="DataOciCoreAppCatalogListingResourceVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#name DataOciCoreAppCatalogListingResourceVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#values DataOciCoreAppCatalogListingResourceVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#regex DataOciCoreAppCatalogListingResourceVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#name DataOciCoreAppCatalogListingResourceVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#values DataOciCoreAppCatalogListingResourceVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#regex DataOciCoreAppCatalogListingResourceVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get"></a>

```csharp
private DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.accessiblePorts">AccessiblePorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.allowedActions">AllowedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.availableRegions">AvailableRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.compatibleShapes">CompatibleShapes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceId">ListingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.timePublished">TimePublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessiblePorts`<sup>Required</sup> <a name="AccessiblePorts" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.accessiblePorts"></a>

```csharp
public double[] AccessiblePorts { get; }
```

- *Type:* double[]

---

##### `AllowedActions`<sup>Required</sup> <a name="AllowedActions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.allowedActions"></a>

```csharp
public string[] AllowedActions { get; }
```

- *Type:* string[]

---

##### `AvailableRegions`<sup>Required</sup> <a name="AvailableRegions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.availableRegions"></a>

```csharp
public string[] AvailableRegions { get; }
```

- *Type:* string[]

---

##### `CompatibleShapes`<sup>Required</sup> <a name="CompatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.compatibleShapes"></a>

```csharp
public string[] CompatibleShapes { get; }
```

- *Type:* string[]

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `ListingResourceId`<sup>Required</sup> <a name="ListingResourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceId"></a>

```csharp
public string ListingResourceId { get; }
```

- *Type:* string

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceVersion"></a>

```csharp
public string ListingResourceVersion { get; }
```

- *Type:* string

---

##### `TimePublished`<sup>Required</sup> <a name="TimePublished" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.timePublished"></a>

```csharp
public string TimePublished { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions</a>

---


### DataOciCoreAppCatalogListingResourceVersionsFilterList <a name="DataOciCoreAppCatalogListingResourceVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get"></a>

```csharp
private DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference <a name="DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



