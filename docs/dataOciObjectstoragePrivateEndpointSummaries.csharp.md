# `dataOciObjectstoragePrivateEndpointSummaries` Submodule <a name="`dataOciObjectstoragePrivateEndpointSummaries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries oci_objectstorage_private_endpoint_summaries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummaries(Construct Scope, string Id, DataOciObjectstoragePrivateEndpointSummariesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig">DataOciObjectstoragePrivateEndpointSummariesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig">DataOciObjectstoragePrivateEndpointSummariesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstoragePrivateEndpointSummaries.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstoragePrivateEndpointSummaries.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstoragePrivateEndpointSummaries.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstoragePrivateEndpointSummaries.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstoragePrivateEndpointSummaries to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstoragePrivateEndpointSummaries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePrivateEndpointSummaries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries">PrivateEndpointSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter"></a>

```csharp
public DataOciObjectstoragePrivateEndpointSummariesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a>

---

##### `PrivateEndpointSummaries`<sup>Required</sup> <a name="PrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries"></a>

```csharp
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList PrivateEndpointSummaries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePrivateEndpointSummariesConfig <a name="DataOciObjectstoragePrivateEndpointSummariesConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Namespace,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#filter DataOciObjectstoragePrivateEndpointSummaries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciObjectstoragePrivateEndpointSummariesFilter <a name="DataOciObjectstoragePrivateEndpointSummariesFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}.

---

### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries {

};
```


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePrivateEndpointSummariesFilterList <a name="DataOciObjectstoragePrivateEndpointSummariesFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get"></a>

```csharp
private DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get"></a>

```csharp
private DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue"></a>

```csharp
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a>

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get"></a>

```csharp
private DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets">AccessTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes">AdditionalPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns">Fqdns</a></code> | <code>HashiCorp.Cdktf.AnyMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified">TimeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTargets`<sup>Required</sup> <a name="AccessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets"></a>

```csharp
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList AccessTargets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a>

---

##### `AdditionalPrefixes`<sup>Required</sup> <a name="AdditionalPrefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes"></a>

```csharp
public string[] AdditionalPrefixes { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns"></a>

```csharp
public AnyMap Fqdns { get; }
```

- *Type:* HashiCorp.Cdktf.AnyMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified"></a>

```csharp
public string TimeModified { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue"></a>

```csharp
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a>

---



