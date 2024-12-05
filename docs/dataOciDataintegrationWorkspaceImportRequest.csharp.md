# `dataOciDataintegrationWorkspaceImportRequest` Submodule <a name="`dataOciDataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceImportRequest <a name="DataOciDataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequest(Construct Scope, string Id, DataOciDataintegrationWorkspaceImportRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig">DataOciDataintegrationWorkspaceImportRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig">DataOciDataintegrationWorkspaceImportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataintegrationWorkspaceImportRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataintegrationWorkspaceImportRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataintegrationWorkspaceImportRequest.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataintegrationWorkspaceImportRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">AreDataAssetReferencesIncluded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages">ErrorMessages</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution">ImportConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects">ImportedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport">ObjectKeyForImport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">TotalImportedObjectCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput">ImportRequestKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey">ImportRequestKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AreDataAssetReferencesIncluded`<sup>Required</sup> <a name="AreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```csharp
public IResolvable AreDataAssetReferencesIncluded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```csharp
public StringMap ErrorMessages { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportConflictResolution`<sup>Required</sup> <a name="ImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```csharp
public DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList ImportConflictResolution { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a>

---

##### `ImportedObjects`<sup>Required</sup> <a name="ImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```csharp
public DataOciDataintegrationWorkspaceImportRequestImportedObjectsList ImportedObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectKeyForImport`<sup>Required</sup> <a name="ObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```csharp
public string ObjectKeyForImport { get; }
```

- *Type:* string

---

##### `ObjectStorageRegion`<sup>Required</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```csharp
public string ObjectStorageRegion { get; }
```

- *Type:* string

---

##### `ObjectStorageTenancyId`<sup>Required</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```csharp
public string ObjectStorageTenancyId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```csharp
public string TimeEndedInMillis { get; }
```

- *Type:* string

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```csharp
public string TimeStartedInMillis { get; }
```

- *Type:* string

---

##### `TotalImportedObjectCount`<sup>Required</sup> <a name="TotalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```csharp
public double TotalImportedObjectCount { get; }
```

- *Type:* double

---

##### `ImportRequestKeyInput`<sup>Optional</sup> <a name="ImportRequestKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput"></a>

```csharp
public string ImportRequestKeyInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `ImportRequestKey`<sup>Required</sup> <a name="ImportRequestKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey"></a>

```csharp
public string ImportRequestKey { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceImportRequestConfig <a name="DataOciDataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ImportRequestKey,
    string WorkspaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey">ImportRequestKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ImportRequestKey`<sup>Required</sup> <a name="ImportRequestKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey"></a>

```csharp
public string ImportRequestKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}.

---

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestImportConflictResolution {

};
```


### DataOciDataintegrationWorkspaceImportRequestImportedObjects <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestImportedObjects {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get"></a>

```csharp
private DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">DuplicatePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">DuplicateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">ImportConflictResolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DuplicatePrefix`<sup>Required</sup> <a name="DuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```csharp
public string DuplicatePrefix { get; }
```

- *Type:* string

---

##### `DuplicateSuffix`<sup>Required</sup> <a name="DuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```csharp
public string DuplicateSuffix { get; }
```

- *Type:* string

---

##### `ImportConflictResolutionType`<sup>Required</sup> <a name="ImportConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```csharp
public string ImportConflictResolutionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataintegrationWorkspaceImportRequestImportConflictResolution InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestImportedObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```csharp
private DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">NamePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">NewKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">OldKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">ResolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">TimeUpdatedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```csharp
public string AggregatorKey { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```csharp
public string NamePath { get; }
```

- *Type:* string

---

##### `NewKey`<sup>Required</sup> <a name="NewKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```csharp
public string NewKey { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `OldKey`<sup>Required</sup> <a name="OldKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```csharp
public string OldKey { get; }
```

- *Type:* string

---

##### `ResolutionAction`<sup>Required</sup> <a name="ResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```csharp
public string ResolutionAction { get; }
```

- *Type:* string

---

##### `TimeUpdatedInMillis`<sup>Required</sup> <a name="TimeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```csharp
public string TimeUpdatedInMillis { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataintegrationWorkspaceImportRequestImportedObjects InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a>

---



